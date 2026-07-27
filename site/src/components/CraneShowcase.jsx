import { useEffect, useState } from "react";

export default function CraneShowcase({ images }) {
  // Присваиваем каждому изображению уникальный ID, если его нет
  const [items, setItems] = useState(() =>
    images.map((img, index) => ({ ...img, id: img.id || `crane-${index}` }))
  );

  // Карусель: каждые 5 секунд смещаем элементы по кругу
  useEffect(() => {
    const id = setInterval(() => {
      setItems((prev) => [prev[2], prev[0], prev[1]]);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // Клик по боковой картинке перемещает её в центр (индекс 0)
  function swapToCenter(clickedId) {
    setItems((prev) => {
      const currentIndex = prev.findIndex((item) => item.id === clickedId);
      if (currentIndex === 0) return prev; // Уже в центре

      const next = [...prev];
      [next[0], next[currentIndex]] = [next[currentIndex], next[0]];
      return next;
    });
  }

  // Описание 3-х физических позиций на экране
  // index 0 = центр, index 1 = слева, index 2 = справа
  const slotStyles = [
    { pos: 0, w: 520, h: 580, z: 3, x: 0, y: 0, opacity: 1 },
    { pos: 1, w: 320, h: 380, z: 1, x: -260, y: 50, opacity: 0.5 },
    { pos: 2, w: 320, h: 380, z: 1, x: 260, y: 70, opacity: 0.5 },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: 850,
        maxWidth: "50vw",
        height: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {items.map((img, index) => {
        // Порядковый номер в массиве определяет, в каком слоте сейчас находится картинка
        const slot = slotStyles[index];

        return (
          <button
            // СТРОГО УНИКАЛЬНЫЙ KEY КАРТИНКИ: заставляет React плавно передвигать кнопка-обертку
            key={img.id}
            onClick={() => swapToCenter(img.id)}
            style={{
              position: "absolute",
              left: `calc(50% + ${slot.x}px - ${slot.w / 2}px)`,
              top: `calc(50% + ${slot.y}px - ${slot.h / 2}px)`,
              width: slot.w,
              height: slot.h,
              zIndex: slot.z,
              border: "none",
              background: "transparent",
              padding: 0,
              cursor: slot.pos === 0 ? "default" : "pointer",
              overflow: "visible",
              // Плавный перелет (0.8s) абсолютно всех свойств позиции и размера
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                opacity: slot.opacity,
                filter:
                  slot.pos === 0
                    ? "drop-shadow(0 20px 35px rgba(0,0,0,0.65)) drop-shadow(0 0 15px rgba(245,185,66,0.25))"
                    : "drop-shadow(0 10px 20px rgba(0,0,0,0.4))",
                // Плавное изменение прозрачности и свечения во время полета
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}