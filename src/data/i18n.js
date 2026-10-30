// Translation dictionary for EN / VI
const translations = {
  en: {
    // Navbar
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      certifications: 'Certifications',
      contact: 'Contact',
      resume: 'Resume',
    },
    // Hero
    hero: {
      greeting: "Hi, I'm",
      name: 'Nguyen Minh Quan',
      status: 'Open to internships',
      certs: 'AWS Certified — AI + Cloud',
      hold: 'Hold to accelerate',
      scroll: 'Scroll to explore',
      taglines: [
        'Cloud Security Enthusiast',
        'AWS Certified AI & Cloud Practitioner',
        '3rd Year — Computer Networks & Data Communications (VNU-UET)',
        'Building Resilient & Secure Distributed Systems',
        'Preparing for AWS Solutions Architect — Associate (SAA-C03)',
      ],
      cta_projects: 'View My Work',
      cta_contact: 'Get in Touch',
      downloadCv: 'Download CV',
    },
    // About
    about: {
      label: 'About Me',
      title: 'Who I Am',
      description: `3rd-year Computer Networks & Data Communications student at VNU-UET, currently working as a Machine Learning Intern at FlyRank AI (Chicago, US — remote). AWS Certified in both AI Practitioner and Cloud Practitioner, currently preparing for Solutions Architect – Associate (SAA-C03). I specialize in Cloud Security and Application Security, approaching security as a core design principle: resilient, least-privilege systems built from the architecture up. Skilled in socket programming (TCP/UDP in Java), full-stack web development with AI integration (Claude API), SQL databases, and cloud security fundamentals.`,
      focus: ['Cloud Security', 'Application Security', 'Networking', 'AI on AWS'],
      stats: [
        { value: 'AWS ×2', label: 'AI & Cloud Certified' },
        { value: '5', label: 'Total Certifications' },
        { value: 'ML Intern', label: 'FlyRank AI — Remote' },
        { value: '3rd Year', label: 'VNU-UET Student' },
      ],
    },
    // Skills
    skills: {
      label: 'Skills & Technologies',
      title: 'What I Work With',
      subtitle: 'Technologies and tools I use to build secure, scalable systems.',
    },
    // Projects
    projects: {
      label: 'Featured Projects',
      title: 'What I\'ve Built',
      subtitle: 'Real-world projects solving real problems — not just tutorials.',
      count: 'Selected works',
      featured: 'Featured',
      viewCase: 'View Case Study',
      viewCode: 'Source Code',
      liveDemo: 'Live Demo',
    },
    // Certifications
    certs: {
      label: 'Certifications & Learning',
      title: 'Credentials & Growth',
      subtitle: 'AWS Certified in AI and Cloud — SAA-C03 in progress, backed by SQL and OWASP security fundamentals.',
      earned: 'Earned',
      inProgress: 'In Progress',
      studying: 'In Progress',
      completed: 'Completed',
      verify: 'Verify credential',
      new: 'New',
    },
    // Contact
    contact: {
      label: 'Get In Touch',
      title: "Let's Connect",
      subtitle: 'AWS Certified in AI and Cloud. I\'m looking for internship opportunities in Cloud Security and Application Security — feel free to reach out!',
      email: 'Email Me',
      copy: 'Copy email',
      copied: 'Copied!',
      available: 'Available for 2026 internships',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      or: 'or find me on',
    },
    // Footer
    footer: {
      built: 'Built with React & passion for security',
      rights: 'All rights reserved.',
    },
    // Project Detail
    detail: {
      back: '← Back to Home',
      problem: 'The Problem',
      solution: 'Solution & Technical Decisions',
      architecture: 'Technical Architecture',
      challenges: 'Challenges & How I Solved Them',
      results: 'Results & Lessons Learned',
      techStack: 'Tech Stack',
    },
  },
  vi: {
    // Navbar
    nav: {
      about: 'Giới thiệu',
      skills: 'Kỹ năng',
      projects: 'Dự án',
      certifications: 'Chứng chỉ',
      contact: 'Liên hệ',
      resume: 'CV',
    },
    // Hero
    hero: {
      greeting: 'Xin chào, tôi là',
      name: 'Nguyễn Minh Quân',
      status: 'Sẵn sàng thực tập',
      certs: 'AWS Certified — AI + Cloud',
      hold: 'Giữ để tăng tốc',
      scroll: 'Cuộn để khám phá',
      taglines: [
        'Định hướng Cloud Security',
        'AWS Certified AI & Cloud Practitioner',
        'Sinh viên năm 3 Mạng máy tính & Truyền thông dữ liệu — VNU-UET',
        'Xây dựng hệ thống phân tán an toàn & tin cậy',
        'Đang ôn thi AWS Solutions Architect — Associate (SAA-C03)',
      ],
      cta_projects: 'Xem dự án',
      cta_contact: 'Liên hệ với tôi',
      downloadCv: 'Tải CV',
    },
    // About
    about: {
      label: 'Giới thiệu',
      title: 'Về tôi',
      description: `Sinh viên năm 3 ngành Mạng máy tính và Truyền thông dữ liệu tại Trường Đại học Công nghệ (VNU-UET), hiện đang thực tập vị trí Machine Learning Intern tại FlyRank AI (Chicago, Mỹ — từ xa). Đã đạt chứng chỉ AWS Certified AI Practitioner và AWS Certified Cloud Practitioner, hiện đang ôn thi Solutions Architect – Associate (SAA-C03). Tôi chuyên sâu về Cloud Security và Application Security, xây dựng hệ thống bảo mật từ cấp kiến trúc theo nguyên tắc least-privilege. Có kinh nghiệm lập trình socket TCP/UDP (Java), phát triển web full-stack tích hợp AI (Claude API), cơ sở dữ liệu SQL và bảo mật cloud.`,
      focus: ['Cloud Security', 'Application Security', 'Mạng máy tính', 'AI trên AWS'],
      stats: [
        { value: 'AWS ×2', label: 'Chứng chỉ AI & Cloud' },
        { value: '5', label: 'Tổng chứng chỉ' },
        { value: 'ML Intern', label: 'FlyRank AI — Remote' },
        { value: 'Năm 3', label: 'Sinh viên VNU-UET' },
      ],
    },
    // Skills
    skills: {
      label: 'Kỹ năng & Công nghệ',
      title: 'Những gì tôi sử dụng',
      subtitle: 'Công nghệ và công cụ tôi dùng để xây dựng hệ thống an toàn, có khả năng mở rộng.',
    },
    // Projects
    projects: {
      label: 'Dự án nổi bật',
      title: 'Những gì tôi đã xây dựng',
      subtitle: 'Dự án thực tế giải quyết vấn đề thực — không chỉ là bài tutorial.',
      count: 'Dự án tiêu biểu',
      featured: 'Nổi bật',
      viewCase: 'Xem Case Study',
      viewCode: 'Mã nguồn',
      liveDemo: 'Demo trực tiếp',
    },
    // Certifications
    certs: {
      label: 'Chứng chỉ & Học tập',
      title: 'Chứng chỉ & Phát triển',
      subtitle: 'Đã đạt chứng chỉ AWS AI và Cloud — đang ôn SAA-C03, cùng nền tảng SQL và bảo mật OWASP.',
      earned: 'Đã đạt',
      inProgress: 'Đang thi',
      studying: 'Đang ôn thi',
      completed: 'Hoàn thành',
      verify: 'Xác minh chứng chỉ',
      new: 'Mới',
    },
    // Contact
    contact: {
      label: 'Liên hệ',
      title: 'Kết nối với tôi',
      subtitle: 'Đã đạt chứng chỉ AWS AI và Cloud. Tôi đang tìm kiếm cơ hội thực tập trong lĩnh vực Cloud Security và Application Security — đừng ngần ngại liên hệ!',
      email: 'Gửi Email',
      copy: 'Sao chép email',
      copied: 'Đã sao chép!',
      available: 'Sẵn sàng thực tập 2026',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      or: 'hoặc tìm tôi trên',
    },
    // Footer
    footer: {
      built: 'Xây dựng với React & niềm đam mê bảo mật',
      rights: 'Tất cả quyền được bảo lưu.',
    },
    // Project Detail
    detail: {
      back: '← Về trang chủ',
      problem: 'Vấn đề',
      solution: 'Giải pháp & Lựa chọn kỹ thuật',
      architecture: 'Kiến trúc kỹ thuật',
      challenges: 'Thử thách & Cách giải quyết',
      results: 'Kết quả & Bài học rút ra',
      techStack: 'Tech Stack',
    },
  },
};

export default translations;
