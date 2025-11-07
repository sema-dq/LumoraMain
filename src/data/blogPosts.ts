export interface BlogPost {
  id: number;
  title: string;
  snippet: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  content: ( { type: 'h2' | 'h3' | 'p'; text?: string; } | { type: 'ul'; items: string[] } )[];
}

export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '10 TikTok Advertising Strategies That Actually Work in 2024',
      snippet: 'Discover the latest TikTok ad formats and targeting strategies that are driving real results for businesses across industries.',
      category: 'advertising',
      readTime: '8 min read',
      date: 'Dec 15, 2024',
      image: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: [
        { type: 'h2', text: 'Introduction' },
        { type: 'p', text: "As TikTok continues to dominate the social media landscape in 2025, advertisers are constantly seeking new strategies to maximize their reach and engagement." },
        { type: 'p', text: "Here are 10 proven TikTok advertising strategies that can help your brand stand out:" },
        { type: 'h3', text: "1. Leverage TikTok's Latest Ad Formats" },
        { type: 'p', text: "Explore Spark Ads and Collection Ads to create immersive shopping experiences that captivate your audience." },
        { type: 'h3', text: "2. Utilize Influencer Partnerships" },
        { type: 'p', text: "Collaborate with creators who align with your brand to tap into their loyal audiences and build trust." },
        { type: 'h3', text: "3. Optimize for TikTok's Algorithm" },
        { type: 'p', text: "Create authentic, engaging content that encourages user interaction to boost organic reach." },
        { type: 'h3', text: "4. Target Niche Communities" },
        { type: 'p', text: "Use TikTok's detailed targeting options to reach specific interest groups effectively." },
        { type: 'h3', text: "5. Incorporate Trending Sounds and Hashtags" },
        { type: 'p', text: "Stay relevant by integrating popular audio clips and hashtags in your ads." },
        { type: 'h3', text: "6. Experiment with User-Generated Content" },
        { type: 'p', text: "Encourage your audience to create content featuring your products, enhancing trust and authenticity." },
        { type: 'h3', text: "7. Run Time-Sensitive Campaigns" },
        { type: 'p', text: "Capitalize on holidays and events with limited-time offers to drive urgency." },
        { type: 'h3', text: "8. Analyze Performance Metrics Regularly" },
        { type: 'p', text: "Use TikTok's analytics tools to refine your campaigns based on real-time data." },
        { type: 'h3', text: "9. Invest in Creative Testing" },
        { type: 'p', text: "Continuously test different ad creatives to discover what resonates best with your audience." },
        { type: 'h3', text: "10. Integrate Seamlessly with E-commerce" },
        { type: 'p', text: "Utilize TikTok Shopping features to streamline the path from discovery to purchase." },
        { type: 'h2', text: "Conclusion" },
        { type: 'p', text: "By implementing these strategies, advertisers can harness TikTok's unique platform dynamics to achieve measurable results and stay ahead in the competitive social media advertising space." }
      ]
    },
    {
      id: 2,
      title: 'Instagram Algorithm Update: What Changed and How to Adapt',
      snippet: 'The latest Instagram algorithm changes are affecting organic reach. Learn how to adjust your content strategy for maximum visibility.',
      category: 'strategy',
      readTime: '6 min read',
      date: 'Dec 12, 2024',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=250&fit=crop',
      content: ''
    },
    {
      id: 3,
      title: 'How to Calculate and Improve Your Social Media ROI',
      snippet: 'A comprehensive guide to measuring social media ROI with practical frameworks and tools for tracking performance.',
      category: 'analytics',
      readTime: '12 min read',
      date: 'Dec 10, 2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      content: ''
    },
    {
      id: 4,
      title: 'LinkedIn B2B Advertising: Advanced Targeting Techniques',
      snippet: 'Master LinkedIn\'s sophisticated targeting options to reach decision-makers and generate high-quality B2B leads.',
      category: 'advertising',
      readTime: '10 min read',
      date: 'Dec 8, 2024',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      content: ''
    },
    {
      id: 5,
      title: 'Content Creation Workflows That Scale',
      snippet: 'Build efficient content creation processes that allow you to consistently produce high-quality content at scale.',
      category: 'content',
      readTime: '7 min read',
      date: 'Dec 5, 2024',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=250&fit=crop',
      content: ''
    },
    {
      id: 6,
      title: 'Social Commerce: Turning Followers Into Customers',
      snippet: 'Leverage social commerce features across platforms to create seamless shopping experiences for your audience.',
      category: 'strategy',
      readTime: '9 min read',
      date: 'Dec 3, 2024',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      content: ''
    }
];
