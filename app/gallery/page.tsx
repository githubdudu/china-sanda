import type { Metadata } from "next";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery | 图库 - China Sanda Club",
  description: "View our training facilities, competition highlights, and student achievements. 浏览我们的训练设施、比赛精彩瞬间和学员成就。",
};

// Enable static generation with on-demand revalidation
export const revalidate = false;

const GalleryPage = () => {
  const categories = {
    training: { label: "Training", labelChinese: "训练" },
    competition: { label: "Competition", labelChinese: "比赛" },
    events: { label: "Events", labelChinese: "活动" },
    facilities: { label: "Facilities", labelChinese: "设施" },
    achievements: { label: "Achievements", labelChinese: "成就" },
  };

  // Group images by category
  const imagesByCategory = galleryImages.reduce((acc, image) => {
    if (!acc[image.category]) {
      acc[image.category] = [];
    }
    acc[image.category].push(image);
    return acc;
  }, {} as Record<string, typeof galleryImages>);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Gallery
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--primary)" }}>
            图库
          </h2>
          <p className="text-lg max-w-3xl mx-auto opacity-80">
            Explore our training facilities, competition highlights, and the achievements of our students.
          </p>
          <p className="text-lg max-w-3xl mx-auto opacity-80 mt-2">
            探索我们的训练设施、比赛精彩瞬间和学员的成就。
          </p>
        </div>

        {/* Featured Images */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Featured</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.filter((img) => img.featured).map((image) => (
              <div key={image.id} className="rounded-lg overflow-hidden border border-foreground/10">
                {/* TODO: Replace with Next.js Image component */}
                <div className="aspect-video bg-foreground/5 flex items-center justify-center">
                  <span className="text-foreground/30">Image</span>
                </div>
                <div className="p-4">
                  <h4 className="font-bold mb-1">{image.title}</h4>
                  <p className="text-sm mb-2" style={{ color: "var(--primary)" }}>
                    {image.titleChinese}
                  </p>
                  {image.description && (
                    <>
                      <p className="text-xs opacity-70">{image.description}</p>
                      <p className="text-xs opacity-70 mt-1">{image.descriptionChinese}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Images by Category */}
        {Object.entries(imagesByCategory).map(([category, images]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold mb-2">
              {categories[category as keyof typeof categories].label}
            </h3>
            <p className="text-lg mb-6" style={{ color: "var(--primary)" }}>
              {categories[category as keyof typeof categories].labelChinese}
            </p>

            {/* Placeholder: GalleryGrid component will be rendered here */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image) => (
                <div key={image.id} className="rounded-lg overflow-hidden border border-foreground/10">
                  {/* TODO: Replace with GalleryGrid component */}
                  <div className="aspect-square bg-foreground/5 flex items-center justify-center">
                    <span className="text-foreground/30 text-xs">Image</span>
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-semibold">{image.title}</h4>
                    <p className="text-xs" style={{ color: "var(--primary)" }}>
                      {image.titleChinese}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
