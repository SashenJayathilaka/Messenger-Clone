"use client";

import Image from "next/image";
import Modal from "./Modal";

type Props = {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
};

function ImageModel({ isOpen, onClose, src }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image className="object-cover" fill alt="Image" src={src!} />
      </div>
    </Modal>
  );
}

export default ImageModel;
