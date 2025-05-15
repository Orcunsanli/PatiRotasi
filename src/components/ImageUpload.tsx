import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onImageSelect: (imageUrl: string) => void;
}

export function ImageUpload({ onImageSelect }: ImageUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          onImageSelect(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  }, [onImageSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
    >
      <input {...getInputProps()} />
      <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
      <p className="text-sm text-gray-600">
        {isDragActive
          ? 'Fotoğrafı buraya bırakın'
          : 'Fotoğraf yüklemek için tıklayın veya sürükleyin'}
      </p>
    </div>
  );
}