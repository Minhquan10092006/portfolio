const projects = {
  en: [
    {
      id: 'quiz-platform',
      title: 'Intelligent Quiz Platform with AI-Powered Anti-Cheat',
      shortDescription:
        'A full-stack web quiz application featuring real-time behavioral telemetry, an AI-driven anti-cheat engine integrated with Claude API, and an automated testbank conversion pipeline.',
      thumbnail: '/quiz-platform.jpg',
      tags: [
        'React',
        'Node.js',
        'MongoDB',
        'Claude API',
        'WebSocket',
        'Express',
      ],
      github: 'https://github.com/Minhquan10092006/exam-practice-web',
      liveDemo: 'https://exam-practice-web.vercel.app/',
      featured: true,
      // Case study content
      problem: `Online exams are plagued by integrity issues. Students switch tabs, copy-paste answers from external sources, and share questions in real-time. Traditional proctoring solutions are either too invasive (requiring webcam access) or too simplistic (basic tab-switch detection). There was no lightweight, privacy-respecting solution that could analyze behavioral patterns and generate actionable integrity reports.`,
      solution: `Built a comprehensive quiz platform with a multi-layered anti-cheat system:

• **Behavioral Telemetry Layer**: Tracks tab visibility changes, copy/paste events, keyboard patterns, mouse movement anomalies, and answer timing distributions — all client-side with minimal performance overhead.

• **Real-time Analysis Engine**: WebSocket-based pipeline that streams behavioral events to the server for live scoring. Each user session gets a running "integrity score" based on weighted anomaly detection.

• **Claude API Integration**: At the end of each exam session, aggregated behavioral data is sent to Claude API to generate a natural-language integrity report — summarizing suspicious patterns, confidence levels, and recommended actions for instructors.

• **Data Conversion Pipeline**: Built a standalone tool to convert Excel testbanks (from existing academic materials) into structured JSON/MongoDB documents, with validation, duplicate detection, and auto-categorization.

• **Auto Question Generation**: Implemented question shuffling, option randomization, and template-based variant generation to make each exam session unique.`,
      architecture: `**Frontend**: React SPA with custom hooks for behavioral event capture. Events are batched and sent via WebSocket to reduce network overhead.

**Backend**: Node.js + Express REST API for quiz CRUD, user auth, and session management. Separate WebSocket server for real-time telemetry ingestion.

**Database**: MongoDB for flexible document storage — quiz schemas, user sessions, behavioral event logs, and generated reports.

**AI Layer**: Claude API called server-side with structured prompts. Behavioral data is preprocessed into a summarized format before API calls to optimize token usage and cost.

**Data Pipeline**: Node.js CLI tool that reads .xlsx files, parses with SheetJS, validates against schema rules, and outputs MongoDB-ready JSON.`,
      challenges: [
        {
          title: 'Balancing Detection Sensitivity vs. False Positives',
          description:
            'Initial behavioral thresholds flagged legitimate actions (e.g., switching to a calculator app) as cheating. Solved by implementing a weighted scoring system with configurable thresholds and a "grace period" for brief tab switches.',
        },
        {
          title: 'Claude API Prompt Engineering',
          description:
            'Getting consistent, structured integrity reports from Claude required significant prompt iteration. Developed a structured prompt template with explicit output format requirements and behavioral category definitions.',
        },
        {
          title: 'Excel Parsing Edge Cases',
          description:
            'Academic testbanks had wildly inconsistent formatting — merged cells, embedded images, mixed encodings. Built a robust parser with fallback strategies and validation reports for unparseable entries.',
        },
      ],
      results: [
        'Successfully processes exam sessions and generates integrity reports',
        'Testbank converter handles multiple Excel format variants with validation',
        'Anti-cheat system detects tab switching, copy-paste, and timing anomalies',
        'Modular architecture allows adding new detection rules without refactoring',
        'Learned to integrate AI APIs for practical analysis, not just chatbot-style use',
      ],
    },
    {
      id: 'socket-network-project',
      title: 'Cross-Platform TCP/UDP Socket Communication System',
      shortDescription:
        'A multi-client network communication system built in Java for Computer Networks at VNU-UET, establishing reliable TCP/UDP packet exchange and protocol handling between Windows host and Ubuntu VM.',
      thumbnail: '/socket-project.jpg',
      tags: [
        'Java',
        'TCP/IP',
        'UDP',
        'Socket Programming',
        'Linux / Ubuntu',
        'Multithreading',
        'Network Protocols',
      ],
      github: 'https://github.com/Minhquan10092006/Socket-Project',
      liveDemo: null,
      featured: true,
      problem: `Developing network applications requires mastering transport layer behaviors, managing socket lifecycles, and ensuring reliable data transfer across heterogeneous environments with different network interfaces and OS network stacks (Windows host vs. Ubuntu Linux VM).`,
      solution: `Designed and implemented an end-to-end Socket Communication System:

• **Dual Protocol Support**: Implemented both connection-oriented TCP (ensuring ordered, reliable byte streams) and connectionless UDP (for lightweight, low-latency datagram transmission).

• **Multi-Client Concurrency**: Designed a thread-per-client / thread-pool architecture on the server side to handle simultaneous client connections without blocking the main listener thread.

• **Cross-Platform Interoperability**: Configured host-only / bridged virtual network adapters in VMware/VirtualBox to establish seamless bidirectional communication between a Windows host and an Ubuntu Linux VM.

• **Custom Application Layer Protocol**: Defined custom message framing, packet headers, and payload serialization to prevent buffer fragmentation and handle packet parsing accurately.`,
      architecture: `**Client**: Java application running on Windows Host with interactive CLI, validating user inputs, serialization, and packet framing.

**Server**: Java multithreaded server deployed on Ubuntu Linux VM listening on designated TCP/UDP ports, maintaining client session state and logging network events.

**Network Layer**: Virtual networking bridges operating across OS layers with custom packet inspection and error recovery.`,
      challenges: [
        {
          title: 'Managing Cross-VM Network Addressing & Firewall Rules',
          description:
            'NAT vs Host-Only adapter configurations caused connection drops between Windows and Ubuntu VM. Resolved by configuring dedicated subnet routes and configuring Linux iptables / UFW firewall rules.',
        },
        {
          title: 'Thread Safety & Resource Deallocation',
          description:
            'Prevented socket descriptor leaks and thread starvation under multiple concurrent client disconnects by wrapping socket streams in robust try-with-resources blocks and connection pools.',
        },
      ],
      results: [
        'Demonstrated seamless cross-OS TCP/UDP communication between Windows and Linux',
        'Handled multiple concurrent client sessions with robust thread isolation',
        'Deepened understanding of OSI Model, TCP 3-way handshake, socket states, and packet framing',
      ],
    },
  ],
  vi: [
    {
      id: 'quiz-platform',
      title: 'Nền tảng Quiz thông minh với Hệ thống chống gian lận AI',
      shortDescription:
        'Ứng dụng web quiz full-stack với phân tích hành vi thời gian thực, engine chống gian lận tích hợp Claude API, và pipeline chuyển đổi testbank tự động.',
      thumbnail: '/quiz-platform.jpg',
      tags: [
        'React',
        'Node.js',
        'MongoDB',
        'Claude API',
        'WebSocket',
        'Express',
      ],
      github: 'https://github.com/Minhquan10092006/exam-practice-web',
      liveDemo: 'https://exam-practice-web.vercel.app/',
      featured: true,
      problem: `Các kỳ thi trực tuyến thường gặp vấn đề về tính toàn vẹn. Thí sinh chuyển tab, copy-paste đáp án từ nguồn bên ngoài, và chia sẻ câu hỏi trong thời gian thực. Các giải pháp giám sát truyền thống hoặc quá xâm phạm (yêu cầu truy cập webcam) hoặc quá đơn giản (chỉ phát hiện chuyển tab cơ bản). Không có giải pháp nhẹ, tôn trọng quyền riêng tư mà có thể phân tích mẫu hành vi và tạo báo cáo toàn vẹn có giá trị thực tiễn.`,
      solution: `Xây dựng nền tảng quiz toàn diện với hệ thống chống gian lận đa tầng:

• **Tầng Thu thập Hành vi**: Theo dõi thay đổi tab, sự kiện copy/paste, mẫu bàn phím, bất thường chuyển động chuột, và phân bố thời gian trả lời — tất cả phía client với overhead tối thiểu.

• **Engine Phân tích Thời gian thực**: Pipeline dựa trên WebSocket streaming sự kiện hành vi lên server. Mỗi phiên thi có "điểm toàn vẹn" chạy dựa trên phát hiện bất thường có trọng số.

• **Tích hợp Claude API**: Cuối mỗi phiên thi, dữ liệu hành vi tổng hợp được gửi đến Claude API để tạo báo cáo toàn vẹn bằng ngôn ngữ tự nhiên — tóm tắt các mẫu đáng ngờ, mức độ tin cậy, và đề xuất hành động cho giảng viên.

• **Pipeline Chuyển đổi Dữ liệu**: Công cụ độc lập chuyển đổi testbank Excel sang tài liệu JSON/MongoDB có cấu trúc, với validation, phát hiện trùng lặp, và phân loại tự động.

• **Tự động Sinh Câu hỏi**: Xáo trộn câu hỏi, ngẫu nhiên hóa đáp án, và sinh biến thể dựa trên template để mỗi phiên thi là duy nhất.`,
      architecture: `**Frontend**: React SPA với custom hooks cho việc thu thập sự kiện hành vi. Các sự kiện được gộp batch và gửi qua WebSocket để giảm overhead mạng.

**Backend**: Node.js + Express REST API cho quiz CRUD, xác thực người dùng, và quản lý phiên. Server WebSocket riêng cho việc tiếp nhận telemetry thời gian thực.

**Database**: MongoDB cho lưu trữ tài liệu linh hoạt — schema quiz, phiên người dùng, log sự kiện hành vi, và báo cáo được tạo.

**Tầng AI**: Claude API được gọi phía server với prompt có cấu trúc. Dữ liệu hành vi được tiền xử lý thành định dạng tóm tắt trước khi gọi API để tối ưu token và chi phí.

**Pipeline Dữ liệu**: Công cụ CLI Node.js đọc file .xlsx, parse bằng SheetJS, validate theo quy tắc schema, và xuất JSON sẵn sàng cho MongoDB.`,
      challenges: [
        {
          title: 'Cân bằng Độ nhạy Phát hiện vs. False Positive',
          description:
            'Ngưỡng hành vi ban đầu đánh dấu các hành động hợp lệ (ví dụ: chuyển sang app máy tính) là gian lận. Giải quyết bằng hệ thống điểm có trọng số với ngưỡng có thể cấu hình và "thời gian ân hạn" cho chuyển tab ngắn.',
        },
        {
          title: 'Prompt Engineering cho Claude API',
          description:
            'Để nhận báo cáo toàn vẹn nhất quán, có cấu trúc từ Claude đòi hỏi nhiều lần lặp prompt. Phát triển template prompt có cấu trúc với yêu cầu format output rõ ràng và định nghĩa danh mục hành vi.',
        },
        {
          title: 'Edge Case khi Parse Excel',
          description:
            'Testbank học thuật có format cực kỳ không nhất quán — cell gộp, hình ảnh nhúng, encoding lẫn lộn. Xây dựng parser robust với chiến lược fallback và báo cáo validation cho các entry không parse được.',
        },
      ],
      results: [
        'Xử lý thành công phiên thi và tạo báo cáo toàn vẹn',
        'Bộ chuyển đổi testbank xử lý nhiều biến thể format Excel với validation',
        'Hệ thống chống gian lận phát hiện chuyển tab, copy-paste, và bất thường thời gian',
        'Kiến trúc module cho phép thêm quy tắc phát hiện mới không cần refactor',
        'Học được cách tích hợp AI API cho phân tích thực tế, không chỉ chatbot',
      ],
    },
    {
      id: 'socket-network-project',
      title: 'Hệ thống giao tiếp Socket TCP/UDP liên nền tảng (Windows & Ubuntu VM)',
      shortDescription:
        'Hệ thống lập trình mạng Socket bằng Java cho môn Mạng máy tính tại VNU-UET, thực thi giao tiếp TCP/UDP tin cậy, xử lý đa luồng (multi-client) và truyền gói tin liên nền tảng giữa máy chủ Windows và máy ảo Ubuntu.',
      thumbnail: '/socket-project.jpg',
      tags: [
        'Java',
        'TCP/IP',
        'UDP',
        'Socket Programming',
        'Linux / Ubuntu',
        'Multithreading',
        'Network Protocols',
      ],
      github: 'https://github.com/Minhquan10092006/Socket-Project',
      liveDemo: null,
      featured: true,
      problem: `Việc phát triển ứng dụng mạng đòi hỏi nắm vững hành vi tầng Giao vận (Transport Layer), quản lý vòng đời socket và đảm bảo truyền dữ liệu tin cậy giữa các môi trường khác nhau với network stack riêng biệt (máy thật Windows và máy ảo Ubuntu Linux).`,
      solution: `Thiết kế và cài đặt hệ thống giao tiếp Socket hoàn chỉnh:

• **Hỗ trợ cả 2 giao thức**: Triển khai cả TCP hướng kết nối (đảm bảo luồng byte tuần tự, tin cậy) và UDP phi kết nối (truyền datagram nhanh, overhead thấp).

• **Xử lý Đa luồng (Multi-client Concurrency)**: Xây dựng kiến trúc luồng đa luồng (Thread per client) phía Server để phục vụ đồng thời nhiều Client mà không chặn luồng lắng nghe chính.

• **Tương thích Đa nền tảng**: Cấu hình card mạng ảo (Bridged / Host-Only) để thiết lập kênh truyền thông 2 chiều thông suốt giữa Windows Host và máy ảo Ubuntu VM.

• **Giao thức Tầng Ứng dụng Tùy chỉnh**: Định nghĩa cấu trúc gói tin, header và payload serialization để chống phân mảnh gói (packet fragmentation) và phân tích cú pháp dữ liệu chính xác.`,
      architecture: `**Client**: Ứng dụng Java chạy trên Windows Host với giao diện CLI tương tác, validate dữ liệu, đóng gói dữ liệu truyền.

**Server**: Ứng dụng Java đa luồng chạy trên Ubuntu Linux VM lắng nghe trên các port TCP/UDP chỉ định, duy trì trạng thái phiên và ghi log mạng.

**Tầng Mạng**: Cầu nối mạng ảo hóa giữa các hệ điều hành với khả năng bắt gói tin và xử lý lỗi kết nối.`,
      challenges: [
        {
          title: 'Cấu hình Định tuyến & Tường lửa giữa các Máy ảo',
          description:
            'Xung đột giữa chế độ NAT và Host-Only gây mất gói khi truyền giữa Windows và Ubuntu. Đã giải quyết bằng cách định tuyến subnet riêng và cấu hình iptables / UFW trên Linux.',
        },
        {
          title: 'An toàn Luồng & Giải phóng Tài nguyên Socket',
          description:
            'Tránh rò rỉ socket descriptor và tắc nghẽn luồng khi có client ngắt kết nối đột ngột bằng cách sử dụng try-with-resources và quản lý kết nối an toàn.',
        },
      ],
      results: [
        'Triển khai thành công giao tiếp TCP/UDP thông suốt giữa Windows và Ubuntu VM',
        'Xử lý mượt mà nhiều phiên client đồng thời với khả năng cách ly luồng tốt',
        'Nắm vững mô hình OSI, quy trình bắt tay 3 bước TCP, socket lifecycle và network packet framing',
      ],
    },
  ],
};

export default projects;
