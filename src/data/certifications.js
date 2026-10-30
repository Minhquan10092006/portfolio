const certifications = [
  {
    id: 'aws-ai-practitioner',
    title: {
      en: 'AWS Certified AI Practitioner',
      vi: 'AWS Certified AI Practitioner',
    },
    issuer: 'Amazon Web Services',
    code: 'AIF-C01',
    status: 'earned',
    isNew: true,
    date: {
      en: 'Passed Oct 2026',
      vi: 'Đạt 10/2026',
    },
    description: {
      en: 'Foundational certification covering AI/ML services on AWS, including SageMaker, Bedrock, Rekognition, generative AI concepts, and responsible AI practices.',
      vi: 'Chứng chỉ nền tảng về các dịch vụ AI/ML trên AWS, bao gồm SageMaker, Bedrock, Rekognition, khái niệm generative AI và thực hành AI có trách nhiệm.',
    },
    logo: null,
    credentialUrl: null,
  },
  {
    id: 'aws-cloud-practitioner',
    title: {
      en: 'AWS Certified Cloud Practitioner',
      vi: 'AWS Certified Cloud Practitioner',
    },
    issuer: 'Amazon Web Services',
    code: 'CLF-C02',
    status: 'earned',
    date: {
      en: 'Passed Oct 2026',
      vi: 'Đạt 10/2026',
    },
    description: {
      en: 'Foundational certification validating cloud concepts, core AWS services, security and compliance, architecture, pricing, and the shared responsibility model.',
      vi: 'Chứng chỉ nền tảng xác nhận kiến thức về cloud, các dịch vụ AWS cốt lõi, bảo mật và tuân thủ, kiến trúc, chi phí và mô hình trách nhiệm chia sẻ.',
    },
    logo: null,
    credentialUrl: null,
  },
  {
    id: 'aws-solutions-architect-associate',
    title: {
      en: 'AWS Certified Solutions Architect – Associate',
      vi: 'AWS Certified Solutions Architect – Associate',
    },
    issuer: 'Amazon Web Services',
    code: 'SAA-C03',
    status: 'studying',
    date: {
      en: 'Target Dec 2026',
      vi: 'Dự kiến 12/2026',
    },
    description: {
      en: 'In progress: designing resilient, high-performing, and cost-optimized architectures on AWS — multi-tier VPC design, IAM, hybrid networking, storage, and migration strategies.',
      vi: 'Đang ôn thi: thiết kế kiến trúc trên AWS có khả năng chịu lỗi, hiệu năng cao và tối ưu chi phí — VPC nhiều tầng, IAM, kết nối lai, lưu trữ và chiến lược migration.',
    },
    logo: null,
    credentialUrl: null,
  },
  {
    id: 'hackerrank-sql-intermediate',
    title: {
      en: 'SQL (Intermediate) Certificate',
      vi: 'Chứng chỉ SQL (Intermediate)',
    },
    issuer: 'HackerRank',
    status: 'earned',
    date: {
      en: '2025',
      vi: '2025',
    },
    description: {
      en: 'Validates intermediate-level SQL skills including complex joins, subqueries, aggregations, and database optimization techniques.',
      vi: 'Xác nhận kỹ năng SQL trung cấp bao gồm join phức tạp, subquery, aggregation và các kỹ thuật tối ưu hóa cơ sở dữ liệu.',
    },
    logo: null,
    credentialUrl: 'https://www.hackerrank.com/certificates/c21389d1c305',
  },
  {
    id: 'hackerrank-sql-basic',
    title: {
      en: 'SQL (Basics) Certificate',
      vi: 'Chứng chỉ SQL (Basics)',
    },
    issuer: 'HackerRank',
    status: 'earned',
    date: {
      en: '2025',
      vi: '2025',
    },
    description: {
      en: 'Validates foundational SQL skills including SELECT queries, filtering, sorting, and basic aggregation functions.',
      vi: 'Xác nhận kỹ năng SQL cơ bản bao gồm truy vấn SELECT, lọc dữ liệu, sắp xếp và các hàm tổng hợp cơ bản.',
    },
    logo: null,
    credentialUrl: 'https://www.hackerrank.com/certificates/b3d18f67bb51',
  },
  {
    id: 'owasp-top10',
    title: {
      en: 'OWASP Top 10 — Deep Study',
      vi: 'OWASP Top 10 — Nghiên cứu chuyên sâu',
    },
    issuer: 'OWASP — Self-study',
    status: 'completed',
    date: {
      en: 'Completed 2025',
      vi: 'Hoàn thành 2025',
    },
    description: {
      en: 'Completed a deep study of the OWASP Top 10 web application security risks, with hands-on understanding of injection, broken access control, authentication flaws, XSS, SSRF, and security misconfiguration.',
      vi: 'Đã hoàn thành nghiên cứu chuyên sâu 10 rủi ro bảo mật ứng dụng web hàng đầu của OWASP, gồm thực hành về injection, kiểm soát truy cập kém, lỗi xác thực, XSS, SSRF và cấu hình bảo mật sai.',
    },
    logo: null,
    credentialUrl: null,
  },
];

export default certifications;
