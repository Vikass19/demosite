import React, { useState } from 'react';
import { INSTAGRAM_POSTS } from '../data/bridalData';
import { Instagram, Play, Heart, ArrowUpRight, X } from 'lucide-react';
import { InstagramPost } from '../types';

export const InstagramFeed: React.FC = () => {
  const [activePost, setActivePost] = useState<InstagramPost | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F3] border-b border-[#211C1A]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1px] bg-[#D6B98C]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8C7A70]">
                Live Journal
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#211C1A]">
              From the Feed
            </h2>
            <p className="text-sm text-[#211C1A]/70 font-light mt-2">
              Real brides. Real transformations. Real celebrations.
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#211C1A] border border-[#211C1A] hover:bg-[#211C1A] hover:text-[#FAF7F3] transition-colors self-start sm:self-auto cursor-pointer"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @shreyakamat</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-Tile Editorial Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className="group relative aspect-square overflow-hidden bg-[#211C1A] cursor-pointer shadow-xs border border-[#211C1A]/10"
            >
              <img
                src={post.image}
                alt={post.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-500 ease-out"
              />

              {/* Overlay with Likes and Reel badge */}
              <div className="absolute inset-0 bg-[#211C1A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 text-white">
                <div className="flex justify-between items-center text-[10px] tracking-wider uppercase">
                  {post.type === 'reel' ? (
                    <span className="flex items-center gap-1 bg-black/40 px-2 py-0.5">
                      <Play className="w-2.5 h-2.5 fill-white" />
                      Reel
                    </span>
                  ) : (
                    <span className="bg-black/40 px-2 py-0.5">Photo</span>
                  )}
                </div>

                <div>
                  <p className="text-[11px] text-white/90 line-clamp-2 leading-snug font-light">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-1 text-[10px] text-[#D6B98C] mt-1.5 font-medium">
                    <Heart className="w-3 h-3 fill-[#D6B98C]" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>

              {/* Permanent Reel Icon if Reel */}
              {post.type === 'reel' && (
                <div className="absolute top-2.5 right-2.5 z-10 p-1.5 bg-[#211C1A]/70 text-white rounded-full group-hover:opacity-0 transition-opacity">
                  <Play className="w-3 h-3 fill-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sub-strip indicator */}
        <div className="mt-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8C7A70] font-light">
            Tagged in 500+ Bridal Stories · Updated Weekly from Wedding Destinations
          </p>
        </div>

      </div>

      {/* Instagram Post Detail Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 bg-[#211C1A]/80 backdrop-blur-sm p-4 flex items-center justify-center animate-in fade-in duration-200">
          <div className="relative bg-[#FAF7F3] max-w-lg w-full border border-[#D6B98C] shadow-2xl p-6 sm:p-7">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 p-1.5 bg-[#FAF7F3] text-[#211C1A] hover:bg-[#211C1A] hover:text-[#FAF7F3] transition-colors cursor-pointer border border-[#211C1A]/10"
              aria-label="Close Instagram detail"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4 border-b border-[#211C1A]/10 pb-3">
              <div className="w-8 h-8 rounded-full bg-[#211C1A] text-white flex items-center justify-center text-xs font-editorial">
                SK
              </div>
              <div>
                <p className="text-xs font-semibold text-[#211C1A]">shreyakamat</p>
                <p className="text-[10px] text-[#8C7A70]">Bandra, Mumbai · Luxury Bridal MUA</p>
              </div>
            </div>

            <div className="aspect-square w-full overflow-hidden mb-4 bg-black/10">
              <img
                src={activePost.image}
                alt={activePost.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs text-[#211C1A]/85 font-light leading-relaxed mb-4">
              {activePost.caption}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-[#211C1A]/10 text-xs">
              <span className="text-[#8C7A70] font-medium">{activePost.category}</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#211C1A] hover:text-[#8C7A70] uppercase tracking-wider text-[11px]"
              >
                View On Instagram <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
