'use client';

import BoardsNew from '@/components/boards-new';
import { useRouter } from 'next/navigation';

export default function BoardsNewPage() {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // TODO: API 호출하여 게시물 등록
    // 성공 시 게시판 목록으로 이동
    router.push('/boards');
  };

  const handleCancel = () => {
    router.push('/boards');
  };

  return <BoardsNew onSubmit={handleSubmit} onCancel={handleCancel} />;
}
