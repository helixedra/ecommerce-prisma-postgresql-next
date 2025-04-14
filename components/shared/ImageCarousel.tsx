"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import "./styles/embla.css";
import ImageDialog from "../ImageDialog";

type EmblaCarouselPropType = {
  options?: EmblaOptionsType;
  children: React.ReactElement<{ src: string }>[];
};

export const EmblaCarousel: React.FC<EmblaCarouselPropType> = (props) => {
  const { options, children } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });
  const [imageDialogState, setImageDialogState] = useState({
    isOpen: false,
    imageUrl: "",
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  const showImage = (child: React.ReactNode) => {
    console.log(child);

    if (child) {
      setImageDialogState((prev) => ({
        isOpen: !prev.isOpen,
        imageUrl: child as any,
      }));
    }
  };

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaMainRef}>
          <div className="embla__container">
            {React.Children.map(children, (child, index) => (
              <div
                className="embla__slide cursor-pointer"
                key={index}
                onClick={() => showImage(child.props.src)}
              >
                {child}
              </div>
            ))}
          </div>
        </div>

        <div className="embla-thumbs">
          <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
            <div className="embla-thumbs__container">
              {React.Children.map(children, (child, index) => (
                <Thumb
                  key={index}
                  selected={index === selectedIndex}
                  index={index}
                  onClick={() => onThumbClick(index)}
                >
                  {child}
                </Thumb>
              ))}
            </div>
          </div>
        </div>
      </div>
      {imageDialogState.isOpen && (
        <ImageDialog
          imageUrl={imageDialogState.imageUrl}
          onClose={() => setImageDialogState({ isOpen: false, imageUrl: "" })}
        />
      )}
    </>
  );
};

type ThumbPropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  children?: React.ReactNode;
};

export const Thumb: React.FC<ThumbPropType> = (props) => {
  const { selected, index, onClick, children } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected opacity-40" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        {children}
      </button>
    </div>
  );
};
