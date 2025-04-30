const fs = require("fs");
const path = require("path");
const https = require("https");
const { promisify } = require("util");

// Define image sources and target filenames
const imagesToDownload = [
  {
    url: "https://images.unsplash.com/photo-1675546529278-bc2ac99879b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80",
    filename: "dubai-skyline.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    filename: "burj-al-arab.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80",
    filename: "dubai-night.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1538121614163-510d42f0e3a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    filename: "dubai-business.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
    filename: "testimonial-1.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    filename: "testimonial-2.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    filename: "testimonial-3.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    filename: "testimonial-4.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80",
    filename: "services-hero.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80",
    filename: "service-1.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    filename: "service-2.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    filename: "service-3.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    filename: "partners-hero.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1554844453-7ea2a562a6c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    filename: "statistics-hero.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1563908830142-a5e389b8c80f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    filename: "statistics-chart.jpg",
  },
];

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, "public", "images");
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);

    https
      .get(url, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(filePath, () => {}); // Delete the file if there was an error
        console.error(`Error downloading ${filename}:`, err.message);
        reject(err);
      });
  });
}

// Download all images
async function downloadAllImages() {
  console.log("Starting image downloads...");

  for (const image of imagesToDownload) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`Failed to download ${image.filename}`);
    }
  }

  console.log("Image downloads complete!");
}

// Start the download process
downloadAllImages().catch(console.error);
