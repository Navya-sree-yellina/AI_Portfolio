import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// System prompt with Navya's complete context
const SYSTEM_PROMPT = `You are an AI assistant representing Navya Sree Yellina, a Generative AI Engineer with 4+ years of experience. Here's your knowledge base:

PROFESSIONAL SUMMARY:
Gen AI Engineer with 4+ years developing enterprise-scale generative AI solutions, specializing in deep learning, transformers, and large language models. Delivered 40% performance improvements through machine learning optimization and PyTorch implementation, with proven expertise in ethical AI development, data privacy, and MLOps practices across AWS, GCP, and Azure cloud platforms serving 500+ concurrent users.

EDUCATION:
- M.Sc. in Computer Science, Saint Louis University (Aug 2023 – May 2025)
  - Thesis: Privacy Threats in Continuous Learning (Machine Learning Security)
- B.Sc. in Computer Science, Koneru Lakshmaiah University (Aug 2017 – May 2021)
  - Minor: Artificial Intelligence

CURRENT POSITION:
Generative AI Engineer at Gemini Consulting & Services (Jan 2025 – Present)
- Architected enterprise AI platform reducing latency by 40% (2.1s → 1.26s)
- Implemented RAG framework achieving 25% NLP accuracy improvement
- Deployed multi-channel AI agents increasing throughput 30%
- Established automated MLOps pipeline accelerating deployment by 35%

PREVIOUS EXPERIENCE:
Systems Engineer at Oracle Cerner (May 2021 - July 2023)
- Built ML monitoring system for 50+ microservices
- Developed ETL pipelines improving query performance by 25%
- Automated cloud infrastructure managing 200+ S3 buckets

Software Engineer Intern at Televerge Communications (Jan 2021 - April 2021)
- Optimized backend systems scaling from 7K to 10K+ daily API requests
- Developed REST API integrations improving data delivery by 40%

KEY SKILLS:
- Generative AI & Deep Learning: Transformers (GPT, BERT, T5), LLMs, OpenAI API, LangChain, RAG
- ML Frameworks: PyTorch, TensorFlow, Hugging Face, scikit-learn
- Cloud & MLOps: AWS SageMaker, Azure ML, GCP, Docker, Kubernetes, CI/CD
- Programming: Python, SQL, JavaScript, Java, FastAPI, React

ACHIEVEMENTS:
- Publication: "Inspecting CNN and ANN Algorithms using Digit Recognition Model" (IRJET, Jun 2020)
- Women Entrepreneur of the Year (2018)
- Employee of the Month for reducing incidents by 30%

Contact: navyasreechoudhary@gmail.com | LinkedIn: navya-sree-yellina | Location: Saint Louis, MO

INSTRUCTIONS:
1. Respond as if you are Navya, maintaining a professional, friendly, and knowledgeable tone.
2. Be specific about experiences and achievements, using actual metrics from the resume.
3. When discussing technical topics, demonstrate deep expertise.
4. For opportunities, show enthusiasm and availability.
5. IMPORTANT: When receiving single-word queries like "experience", "skills", "education", "projects", "salary", "location", provide comprehensive, relevant information about that topic.
6. For recruiter-style queries, be professional and provide detailed information that would help in recruitment decisions.
7. Always provide actionable next steps or additional information the user might find helpful.`;

// Helper function to enhance single-word queries for better AI understanding
function enhanceQuery(message: string): string {
  const lowerMessage = message.toLowerCase().trim();
  const cleanMessage = lowerMessage.replace(/[?!.,]/g, '');
  
  // For single words, provide more context to help the AI understand
  // This is just a hint - OpenAI will handle the actual response
  const words = message.trim().split(/\s+/);
  if (words.length === 1) {
    // Add context for single-word queries to help OpenAI understand better
    const contextMap: { [key: string]: string } = {
      'experience': 'Tell me about Navya\'s professional experience',
      'skills': 'What are Navya\'s technical skills?',
      'education': 'What is Navya\'s educational background?',
      'projects': 'What projects has Navya worked on?',
      'work': 'Tell me about Navya\'s work experience',
      'publications': 'What has Navya published?',
      'salary': 'What are Navya\'s salary expectations?',
      'location': 'Where is Navya located?',
      'availability': 'When is Navya available?',
      'resume': 'Can you provide Navya\'s resume details?',
      'contact': 'How can I contact Navya?',
      'achievements': 'What are Navya\'s achievements?',
      'mlops': 'Tell me about Navya\'s MLOps experience',
      'ai': 'What is Navya\'s AI experience?',
      'rag': 'Tell me about Navya\'s RAG experience',
      'transformers': 'What is Navya\'s experience with transformers?',
      'cloud': 'What cloud platforms has Navya worked with?',
      'python': 'What is Navya\'s Python experience?',
      'thesis': 'What is Navya\'s thesis about?',
      'goals': 'What are Navya\'s career goals?',
      'remote': 'Is Navya open to remote work?',
      'visa': 'What is Navya\'s visa status?'
    };
    
    if (contextMap[cleanMessage]) {
      return contextMap[cleanMessage];
    }
    
    // For any other single word, add context
    return `Tell me about Navya's ${cleanMessage}`;
  }
  
  return message;
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Enhance single-word queries for better context
    const enhancedMessage = enhanceQuery(message);
    
    // Check if OpenAI API key is properly configured
    const apiKey = process.env.OPENAI_API_KEY;
    const isValidApiKey = apiKey && (apiKey.startsWith('sk-proj-') || apiKey.startsWith('sk-')) && apiKey.length > 20;
    
    console.log('API Key check:', { 
      hasKey: !!apiKey, 
      keyPrefix: apiKey ? apiKey.substring(0, 10) + '...' : 'none',
      isValid: isValidApiKey 
    });
    
    if (!isValidApiKey) {
      console.log('OpenAI API key not configured properly, using fallback');
      // Fallback to intelligent mock responses
      return getFallbackResponse(enhancedMessage);
    }

    try {
      // Use OpenAI API for real responses
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: SYSTEM_PROMPT
          },
          {
            role: 'user',
            content: enhancedMessage
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      });

      const response = completion.choices[0]?.message?.content || 'I apologize, but I couldn\'t generate a response. Please try again.';

      return NextResponse.json({
        response,
        metadata: {
          confidence: 0.95,
          suggestedActions: getSuggestedActions(message)
        }
      });
    } catch (openAIError: any) {
      console.error('OpenAI API Error:', openAIError.message || openAIError);
      // Fallback to mock responses if OpenAI fails
      return getFallbackResponse(enhancedMessage);
    }
  } catch (error) {
    console.error('AI Chat Error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}

function getFallbackResponse(message: string) {
  const lowerMessage = message.toLowerCase();
  let response = '';

  // Handle single-word queries first
  const singleWordResponses: { [key: string]: string } = {
    'experience': `I have 4+ years of experience as a Generative AI Engineer. Currently at Gemini Consulting & Services (Jan 2025-Present), previously at Oracle Cerner (2021-2023) and Televerge Communications (2021). I've architected enterprise AI platforms, implemented RAG frameworks with 25% accuracy improvement, and established MLOps pipelines reducing deployment time by 35%. My experience spans deep learning, transformers, LLMs, and cloud platforms (AWS, Azure, GCP).`,
    'work': `I'm currently working as a Generative AI Engineer at Gemini Consulting & Services (Jan 2025-Present). In this role, I've architected an enterprise AI platform that reduced latency by 40%, implemented RAG frameworks achieving 25% NLP accuracy improvement, deployed multi-channel AI agents increasing throughput by 30%, and established automated MLOps pipelines. Previously, I worked at Oracle Cerner as a Systems Engineer and interned at Televerge Communications.`,
    'skills': `My technical expertise includes: Generative AI (Transformers, GPT, BERT, T5, LLMs), ML Frameworks (PyTorch, TensorFlow, Hugging Face), Cloud & MLOps (AWS SageMaker, Azure ML, Docker, Kubernetes), Programming (Python, SQL, JavaScript, Java, FastAPI, React), and specialized skills in RAG systems, LangChain, OpenAI API, and ethical AI development.`,
    'education': `I'm pursuing my M.Sc. in Computer Science at Saint Louis University (graduating May 2025) with a thesis on "Privacy Threats in Continuous Learning." I hold a B.Sc. in Computer Science from Koneru Lakshmaiah University with a minor in Artificial Intelligence. My coursework includes Deep Learning, Distributed Systems, and Transformers.`,
    'projects': `Key projects include: Enterprise AI platform reducing latency by 40% (2.1s to 1.26s), RAG framework achieving 25% NLP accuracy improvement across 10,000+ queries, ML monitoring system for 50+ microservices, ETL pipelines improving query performance by 25%, and automated cloud infrastructure managing 200+ S3 buckets. Each project demonstrated significant performance improvements and scalability.`,
    'publications': `I've published research on "Inspecting CNN and ANN Algorithms using Digit Recognition Model" in the International Research Journal of Engineering and Technology (IRJET) in June 2020. Currently, I'm working on my thesis research focused on "Privacy Threats in Continuous Learning" as part of my M.Sc. at Saint Louis University, exploring machine learning security and privacy-preserving techniques.`,
    'publication': `I've published research on "Inspecting CNN and ANN Algorithms using Digit Recognition Model" in the International Research Journal of Engineering and Technology (IRJET) in June 2020. Currently, I'm working on my thesis research focused on "Privacy Threats in Continuous Learning" as part of my M.Sc. at Saint Louis University, exploring machine learning security and privacy-preserving techniques.`,
    'research': `My research focuses on machine learning security and privacy. I'm currently working on my thesis "Privacy Threats in Continuous Learning" at Saint Louis University. I've also published research on "Inspecting CNN and ANN Algorithms using Digit Recognition Model" (IRJET 2020). My research interests include privacy-preserving ML, ethical AI development, and secure deployment of LLMs in production environments.`,
    'contact': `You can reach me at navyasreechoudhary@gmail.com. I'm also available on LinkedIn at navya-sree-yellina. I'm based in Saint Louis, MO and am actively seeking opportunities in Generative AI and MLOps roles. Feel free to reach out to discuss potential opportunities or collaborations!`,
    'salary': `Based on my experience with enterprise AI solutions and proven track record of delivering 40% performance improvements, I'm looking for competitive compensation aligned with senior Generative AI Engineer roles. I'm open to discussing specific numbers based on the role, responsibilities, and total compensation package.`,
    'location': `I'm currently based in Saint Louis, MO. I'm open to both local opportunities and remote positions. For the right opportunity, I'm also willing to consider relocation within the United States.`,
    'availability': `I'm actively seeking new opportunities and can start with standard notice period. I'm particularly interested in roles focusing on Generative AI, LLMs, and MLOps where I can leverage my expertise in transformers and enterprise-scale AI solutions.`,
    'achievements': `Key achievements: 40% latency reduction (2.1s to 1.26s) for enterprise AI platform, 25% NLP accuracy improvement, 30% increase in contact center throughput, 99.9% uptime for 2.5M+ daily transactions, Published research on CNN/ANN algorithms (IRJET 2020), Women Entrepreneur of the Year (2018), Employee of the Month for reducing incidents by 30%.`
  };

  // Check for single-word match
  const cleanMessage = lowerMessage.trim().replace(/[?!.,]/g, '');
  if (singleWordResponses[cleanMessage]) {
    return NextResponse.json({
      response: singleWordResponses[cleanMessage],
      metadata: {
        confidence: 0.95,
        suggestedActions: getSuggestedActions(message)
      }
    });
  }

  if (lowerMessage.includes('rag') || lowerMessage.includes('retrieval')) {
    response = `I have extensive experience with RAG (Retrieval-Augmented Generation) systems. At Gemini Consulting, I implemented a RAG framework with Python, LangChain, and machine learning optimization techniques that achieved a 25% improvement in NLP accuracy across 10,000+ production queries. The system reduced information retrieval latency by 40% (from 2.1s to 1.26s) while supporting 500+ concurrent users. I utilized OpenAI GPT API, transformers, and vector databases for efficient document retrieval and generation.`;
  } else if (lowerMessage.includes('mlops') || lowerMessage.includes('pipeline')) {
    response = `My MLOps expertise includes establishing automated CI/CD pipelines at both Gemini Consulting and Oracle Cerner. Recently, I've been using Docker, Kubernetes, AWS SageMaker, and Git workflows to accelerate deep learning model deployment cycles by 35% while reducing manual errors from 15% to 3%. I've managed 200+ S3 buckets and 50+ EC2 instances, implementing comprehensive MLOps practices for containerized services across AWS, Azure, and GCP platforms.`;
  } else if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
    response = `I'm a Generative AI Engineer with 4+ years of experience currently working at Gemini Consulting & Services. I'm pursuing my M.Sc. in Computer Science at Saint Louis University with a thesis on "Privacy Threats in Continuous Learning." My expertise spans deep learning, transformers, large language models, and MLOps. I've delivered significant results including 40% performance improvements through ML optimization and have published research on CNN and ANN algorithms.`;
  } else if (lowerMessage.includes('education') || lowerMessage.includes('study')) {
    response = `I'm currently pursuing my M.Sc. in Computer Science at Saint Louis University (graduating May 2025), with a thesis focused on "Privacy Threats in Continuous Learning" in machine learning security. I also hold a B.Sc. in Computer Science from Koneru Lakshmaiah University with a minor in Artificial Intelligence. My coursework includes Deep Learning, Distributed Systems, Machine Learning, Performance Analysis, and Transformers.`;
  } else if (lowerMessage.includes('available') || lowerMessage.includes('opportunity') || lowerMessage.includes('hire')) {
    response = `Yes, I'm actively seeking opportunities in Generative AI and MLOps roles! I'm particularly interested in positions that leverage my expertise in transformers, LLMs, and enterprise-scale AI solutions. With my proven track record of delivering 40% performance improvements and establishing automated MLOps pipelines, I'm excited to contribute to innovative AI projects. Feel free to download my resume or contact me at navyasreechoudhary@gmail.com to discuss potential opportunities.`;
  } else if (lowerMessage.includes('publication') || lowerMessage.includes('research') || lowerMessage.includes('paper')) {
    response = `I've published research on "Inspecting CNN and ANN Algorithms using Digit Recognition Model" in the International Research Journal of Engineering and Technology (IRJET) in June 2020. Currently, I'm working on my thesis research focused on "Privacy Threats in Continuous Learning" as part of my M.Sc. at Saint Louis University. My research interests include privacy-preserving ML, ethical AI development, and secure deployment of LLMs.`;
  } else if (lowerMessage.includes('achievement') || lowerMessage.includes('accomplishment')) {
    response = `Some of my key achievements include: reducing information retrieval latency by 40% (2.1s → 1.26s) for an enterprise AI platform, improving NLP accuracy by 25% across 10,000+ queries, increasing contact center throughput by 30%, and maintaining 99.9% uptime for systems handling 2.5M+ daily transactions. I've also published research on "Inspecting CNN and ANN Algorithms" and received the Women Entrepreneur of the Year award in 2018.`;
  } else if (lowerMessage.includes('work') || lowerMessage.includes('job') || lowerMessage.includes('role')) {
    response = `I'm currently working as a Generative AI Engineer at Gemini Consulting & Services (Jan 2025-Present), where I've architected enterprise AI platforms, implemented RAG frameworks, and established MLOps pipelines. Previously, I worked at Oracle Cerner as a Systems Engineer (2021-2023) building ML monitoring systems and ETL pipelines, and interned at Televerge Communications optimizing backend systems.`;
  } else if (lowerMessage.includes('skills') || lowerMessage.includes('technologies')) {
    response = `My technical expertise spans: Generative AI & Deep Learning (Transformers like GPT, BERT, T5, LLMs, OpenAI API, LangChain, RAG), ML Frameworks (PyTorch, TensorFlow, Hugging Face), Cloud & MLOps (AWS SageMaker, Azure ML, Docker, Kubernetes, CI/CD), and Programming (Python, SQL, JavaScript, Java, FastAPI, React). I also specialize in ethical AI development, privacy-preserving ML, and have strong research capabilities.`;
  } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
    response = `You can reach me at navyasreechoudhary@gmail.com. I'm also available on LinkedIn at navya-sree-yellina. I'm based in Saint Louis, MO and am actively seeking opportunities in Generative AI and MLOps roles. Feel free to reach out to discuss potential opportunities or collaborations!`;
  } else {
    response = `I'd be happy to help you learn more about my experience! You can ask me about my work with generative AI and transformers, MLOps implementations, specific projects at Gemini Consulting or Oracle Cerner, my research on privacy-preserving ML, technical skills, or career opportunities. What specific aspect of my background would you like to explore?`;
  }

  return NextResponse.json({
    response,
    metadata: {
      confidence: 0.9,
      suggestedActions: getSuggestedActions(message)
    }
  });
}

function getSuggestedActions(message: string): string[] {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hire') || lowerMessage.includes('opportunity')) {
    return ['Download Resume', 'Contact Me', 'View Projects'];
  } else if (lowerMessage.includes('project')) {
    return ['View All Projects', 'See Case Studies', 'Download Resume'];
  } else if (lowerMessage.includes('research') || lowerMessage.includes('publication')) {
    return ['Read Publications', 'View Research', 'Contact for Collaboration'];
  } else {
    return ['View Projects', 'Download Resume', 'Contact Me'];
  }
}