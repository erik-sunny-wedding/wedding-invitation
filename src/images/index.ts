// import coverImage from "./cover.jpeg"
// import image1 from "./image1.png"
// import image2 from "./image2.png"
// import image3 from "./image3.png"
// import image4 from "./image4.png"
// import image5 from "./image5.png"
// import image6 from "./image6.png"
// import image7 from "./image7.png"
// import image8 from "./image8.png"
// import image9 from "./image9.png"
// import image10 from "./image10.png"
// import image11 from "./image11.png"
// import image12 from "./image12.png"

// export const COVER_IMAGE = coverImage

// export const GALLERY_IMAGES = [
//   image1,
//   image2,
//   image3,
//   image4,
//   image5,
//   image6,
//   image7,
//   image8,
//   image9,
//   image10,
//   image11,
//   image12,
// ]

// 모든 이미지를 한꺼번에 가져옵니다.
const images = import.meta.glob("./wedding/*.{png,jpg,jpeg}", { eager: true, import: 'default' });

// 1. 커버 이미지 (특정 파일명 지정)
import coverImage from "./cover.jpeg";
export const COVER_IMAGE = coverImage;

// 2. 갤러리 이미지 (숫자 순서대로 정렬하여 배열 생성)
export const GALLERY_IMAGES = Object.entries(images)
  .sort(([a], [b]) => {
    // 파일명에서 숫자만 추출해 정렬 (image1.png, image2.png ...)
    const numA = parseInt(a.replace(/[^0-9]/g, ""));
    const numB = parseInt(b.replace(/[^0-9]/g, ""));
    return numA - numB;
  })
  .map(([_, module]) => module);

const images2 = import.meta.glob("./self/*.{png,jpg,jpeg}", { eager: true, import: 'default' });

export const GALLERY_IMAGES_2 = Object.entries(images2)
  .sort(([a], [b]) => {
    // 파일명에서 숫자만 추출해 정렬 (image1.png, image2.png ...)
    const numA = parseInt(a.replace(/[^0-9]/g, ""));
    const numB = parseInt(b.replace(/[^0-9]/g, ""));
    return numA - numB;
  })
  .map(([_, module]) => module);