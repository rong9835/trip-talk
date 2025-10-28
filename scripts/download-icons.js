const https = require('https');
const fs = require('fs');
const path = require('path');

// 피그마 아이콘 노드 ID와 이름 매핑
const icons = [
  { id: '285:40487', name: 'rwite' },
  { id: '285:40488', name: 'search' },
  { id: '285:40489', name: 'calendar' },
  { id: '285:40490', name: 'single-person-accommodation' },
  { id: '285:40491', name: 'apartment' },
  { id: '285:40492', name: 'hotel' },
  { id: '285:40493', name: 'camp' },
  { id: '285:40494', name: 'room-service' },
  { id: '285:40495', name: 'fire' },
  { id: '285:40496', name: 'spa' },
  { id: '285:40497', name: 'house-on-the-sea' },
  { id: '285:40498', name: 'planterior' },
  { id: '285:40499', name: 'link' },
  { id: '285:40500', name: 'location' },
  { id: '285:40501', name: 'bad' },
  { id: '285:40502', name: 'good' },
  { id: '285:40503', name: 'menu' },
  { id: '285:40504', name: 'chat' },
  { id: '285:40505', name: 'star' },
  { id: '285:40506', name: 'edit' },
  { id: '285:40507', name: 'close' },
  { id: '285:40508', name: 'right-arrow' },
  { id: '285:40509', name: 'left-arrow' },
  { id: '285:40510', name: 'bookmark' },
  { id: '285:40511', name: 'bookmark-filled' },
  { id: '285:40512', name: 'person' },
  { id: '285:40513', name: 'add' },
  { id: '285:40514', name: 'reply' },
  { id: '285:40515', name: 'return' },
  { id: '285:40516', name: 'radio-selected' },
  { id: '285:40517', name: 'radio-enabled' },
  { id: '285:40518', name: 'point' },
  { id: '285:40519', name: 'up-arrow' },
  { id: '285:40520', name: 'down-arrow' },
  { id: '285:40521', name: 'uncheck' },
  { id: '285:40522', name: 'check' },
  { id: '285:40523', name: 'logout' },
  { id: '285:40524', name: 'charge' },
  { id: '285:40525', name: 'login' },
  { id: '285:40526', name: 'store' },
  { id: '285:40527', name: 'mypage' },
  { id: '285:40528', name: 'triptalk' },
  { id: '285:40529', name: 'visibility' }
];

// Figma API 설정
const FIGMA_TOKEN = process.env.FIGMA_TOKEN || '';
const FILE_KEY = process.env.FIGMA_FILE_KEY || '';

if (!FIGMA_TOKEN) {
  console.error('FIGMA_TOKEN 환경 변수가 필요합니다.');
  console.log('사용법: FIGMA_TOKEN=your_token FIGMA_FILE_KEY=your_file_key node scripts/download-icons.js');
  process.exit(1);
}

if (!FILE_KEY) {
  console.error('FIGMA_FILE_KEY 환경 변수가 필요합니다.');
  console.log('사용법: FIGMA_TOKEN=your_token FIGMA_FILE_KEY=your_file_key node scripts/download-icons.js');
  process.exit(1);
}

const outputDir = path.join(__dirname, '../public/icons');

// 출력 디렉토리 생성
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Figma API를 통해 SVG URL 가져오기
function getImageUrls(nodeIds) {
  return new Promise((resolve, reject) => {
    const ids = nodeIds.join(',');
    const options = {
      hostname: 'api.figma.com',
      path: `/v1/images/${FILE_KEY}?ids=${ids}&format=svg`,
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      }
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`API 에러: ${res.statusCode} - ${data}`));
        }
      });
    }).on('error', reject);
  });
}

// SVG 파일 다운로드
function downloadSvg(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      } else {
        reject(new Error(`다운로드 실패: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

// 메인 함수
async function main() {
  console.log(`${icons.length}개의 아이콘을 다운로드합니다...`);

  try {
    // SVG URL 가져오기
    const nodeIds = icons.map(icon => icon.id);
    const result = await getImageUrls(nodeIds);

    if (!result.images) {
      throw new Error('이미지 URL을 가져올 수 없습니다.');
    }

    // 각 아이콘 다운로드
    for (const icon of icons) {
      const url = result.images[icon.id];
      if (!url) {
        console.warn(`${icon.name}: URL을 찾을 수 없습니다.`);
        continue;
      }

      const filepath = path.join(outputDir, `${icon.name}.svg`);
      await downloadSvg(url, filepath);
      console.log(`✓ ${icon.name}.svg`);
    }

    console.log(`\n완료! ${outputDir}에 저장되었습니다.`);
  } catch (error) {
    console.error('에러:', error.message);
    process.exit(1);
  }
}

main();
