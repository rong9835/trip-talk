'use client';

import React, { useState } from 'react';
import Input from '@/commons/components/input';
import Button from '@/commons/components/button';
import styles from './styles.module.css';

interface BoardsNewProps {
  onSubmit?: (data: BoardFormData) => void;
  onCancel?: () => void;
}

export interface BoardFormData {
  author: string;
  password: string;
  title: string;
  content: string;
  zipCode: string;
  address: string;
  detailAddress: string;
  youtubeLink: string;
  images: File[];
}

export default function BoardsNew({ onSubmit, onCancel }: BoardsNewProps) {
  const [formData, setFormData] = useState<BoardFormData>({
    author: '',
    password: '',
    title: '',
    content: '',
    zipCode: '',
    address: '',
    detailAddress: '',
    youtubeLink: '',
    images: [],
  });

  const [imagePreview, setImagePreview] = useState<string[]>(['', '', '']);

  const handleInputChange = (field: keyof BoardFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleZipCodeSearch = () => {
    console.log('우편번호 검색');
  };

  const handleImageUpload = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPreviews = [...imagePreview];
        newPreviews[index] = reader.result as string;
        setImagePreview(newPreviews);

        const newImages = [...formData.images];
        newImages[index] = file;
        setFormData((prev) => ({ ...prev, images: newImages }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!formData.author || !formData.password || !formData.title || !formData.content) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }
    onSubmit?.(formData);
  };

  const handleCancel = () => {
    onCancel?.();
  };

  const isFormValid =
    formData.author &&
    formData.password &&
    formData.title &&
    formData.content &&
    formData.zipCode &&
    formData.address &&
    formData.youtubeLink &&
    formData.images.length > 0;

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>게시물 등록</h1>

      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <div className={styles.rowFields}>
            <Input
              label="작성자"
              required
              placeholder="작성자 명을 입력해 주세요."
              value={formData.author}
              onChange={(e) => handleInputChange('author', e.target.value)}
            />
            <Input
              label="비밀번호"
              required
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
            />
          </div>

          <div className={styles.divider} />

          <Input
            label="제목"
            required
            placeholder="제목을 입력해 주세요."
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />

          <div className={styles.divider} />

          <div className={styles.contentField}>
            <div className={styles.contentLabel}>
              <span className={styles.labelText}>내용</span>
              <span className={styles.required}>*</span>
            </div>
            <Input
              multiline
              placeholder="내용을 입력해 주세요."
              value={formData.content}
              onChange={(e) => handleInputChange('content', e.target.value)}
              containerClassName={styles.textareaContainer}
            />
          </div>

          <div className={styles.addressField}>
            <div className={styles.zipCodeRow}>
              <Input
                label="주소"
                required
                placeholder="01234"
                value={formData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                containerClassName={styles.zipCodeInput}
              />
              <Button
                variant="tertiary"
                size="medium"
                onClick={handleZipCodeSearch}
                className={styles.zipCodeButton}
              >
                우편번호 검색
              </Button>
            </div>
            <Input
              placeholder="주소를 입력해 주세요,"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
            />
            <Input
              placeholder="상세주소"
              value={formData.detailAddress}
              onChange={(e) => handleInputChange('detailAddress', e.target.value)}
            />
          </div>

          <div className={styles.divider} />

          <Input
            label="유튜브 링크"
            required
            placeholder="링크를 입력해 주세요."
            value={formData.youtubeLink}
            onChange={(e) => handleInputChange('youtubeLink', e.target.value)}
          />

          <div className={styles.divider} />

          <div className={styles.imageField}>
            <div className={styles.imageLabel}>
              <span className={styles.labelText}>사진 첨부</span>
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.imageUploadContainer}>
              {[0, 1, 2].map((index) => (
                <label key={index} className={styles.imageUploadBox}>
                  {imagePreview[index] ? (
                    <img
                      src={imagePreview[index]}
                      alt={`Preview ${index + 1}`}
                      className={styles.imagePreview}
                    />
                  ) : (
                    <>
                      <div className={styles.addIcon}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <path
                            d="M20 10V30M10 20H30"
                            stroke="#ABABAB"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <span className={styles.uploadText}>클릭해서 사진 업로드</span>
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload(index)}
                    className={styles.fileInput}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <Button
            variant="tertiary"
            size="medium"
            onClick={handleCancel}
            className={styles.cancelButton}
          >
            취소
          </Button>
          <Button
            variant="primary"
            size="medium"
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={styles.submitButton}
          >
            등록하기
          </Button>
        </div>
      </div>
    </div>
  );
}
