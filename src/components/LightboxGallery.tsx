import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LightboxImage {
  src: string;
  alt: string;
  className?: string;
}

interface LightboxGalleryProps {
  images: LightboxImage[];
  columns?: string;
  imageClassName?: string;
}

// Single image lightbox component
export const SingleImageLightbox = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center p-2">
        <img
          src={src}
          alt={alt}
          className={`portfolio-image portfolio-image-hover w-full h-auto ${className}`}
          onClick={() => setIsOpen(true)}
        />
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent 
          className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-0"
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6" />
            </Button>
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const LightboxGallery = ({ images, columns = "grid-cols-1 md:grid-cols-2 lg:grid-cols-4", imageClassName = "" }: LightboxGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
  };

  return (
    <>
      <div className={`grid ${columns} gap-6 p-2`}>
        {images.map((image, index) => (
          <div key={index} className="flex items-center justify-center p-2">
            <img
              src={image.src}
              alt={image.alt}
              className={`portfolio-image portfolio-image-hover portfolio-image-standard w-full h-auto ${imageClassName} ${image.className || ""}`}
              onClick={() => setSelectedIndex(index)}
            />
          </div>
        ))}
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent 
          className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-0"
          onKeyDown={handleKeyDown}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-6 h-6" />
            </Button>

            {selectedIndex !== null && (
              <>
                {selectedIndex > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 text-white hover:bg-white/20"
                    onClick={handlePrevious}
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>
                )}

                <img
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  className="max-w-full max-h-[85vh] object-contain"
                />

                {selectedIndex < images.length - 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 text-white hover:bg-white/20"
                    onClick={handleNext}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>
                )}

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                  {selectedIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
