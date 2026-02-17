import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';

interface GalleryLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export default function GalleryLightbox({ isOpen, onClose, imageSrc, imageAlt }: GalleryLightboxProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-0">
        <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
          <X className="h-6 w-6 text-white" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <div className="flex items-center justify-center w-full h-full p-4">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
