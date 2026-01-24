import mongoose from 'mongoose';
import slugify from 'slugify';

const BlogSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Title is required'] 
  },
  // Added for SEO
  metaDescription: { 
    type: String, 
    required: [true, 'Meta description is required for SEO'],
    maxLength: 160 
  },
  // Added for the Blog List thumbnails
  coverImage: { 
    type: String, 
    required: [true, 'Cover image URL is required'] 
  },
  slug: { 
    type: String, 
    unique: true 
  },
  content: { 
    type: Object, 
    required: [true, 'Blog content is required'] 
  }, 
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});

// Automatically generate slug from title before saving
BlogSchema.pre('save', function (next) {
  if (this.isModified('title')) {
    this.slug = slugify(this.title, { 
      lower: true, 
      strict: true,
      trim: true 
    });
  }
  next();
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema, 'yatra_blogs');