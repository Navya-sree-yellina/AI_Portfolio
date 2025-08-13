import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// System prompt with Navya's complete context
const SYSTEM_PROMPT = `You are Navya's Personal Assistant - an AI assistant representing Navya Sree Yellina. You should respond naturally and conversationally to ANY question about Navya, just like ChatGPT would, but with deep knowledge about her background.

IMPORTANT: 
- For single-word queries like "experience", "contact", "skills" - provide comprehensive information
- Understand context and intent, not just keywords
- Be conversational and helpful
- You can answer any question about Navya naturally

Navya's Background:

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
1. Respond naturally and conversationally, as a helpful AI assistant would
2. For ANY query (single words, phrases, or complex questions), understand the intent and provide relevant information
3. Be specific about experiences and achievements, using actual metrics
4. When someone asks "contact" or "what is navya contact", provide email and LinkedIn
5. For "projects" or "navyas projects", describe key projects with metrics
6. For "experience" or "navyas experience", provide comprehensive work history
7. Always be helpful and provide complete information, not generic responses
8. You should work like ChatGPT but specialized for Navya's information`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check if OpenAI API key is properly configured
    const apiKey = process.env.OPENAI_API_KEY;
    const isValidApiKey = apiKey && (apiKey.startsWith('sk-proj-') || apiKey.startsWith('sk-')) && apiKey.length > 20;
    
    if (!isValidApiKey) {
      // Only use simple fallback when OpenAI is not available
      return NextResponse.json({
        response: `I'm Navya's Personal Assistant, but I'm currently unable to connect to my AI service. Please ensure the OpenAI API key is configured in the environment variables. You can still reach Navya at navyasreechoudhary@gmail.com or visit her LinkedIn at navya-sree-yellina.`,
        metadata: {
          confidence: 0.5,
          suggestedActions: ['Contact Me', 'Download Resume', 'View Projects']
        }
      });
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
            content: message  // Use original message, not enhanced
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
      // Simple error response when OpenAI fails
      return NextResponse.json({
        response: `I apologize, but I'm having trouble connecting to my AI service right now. Please try again in a moment. Meanwhile, you can reach Navya directly at navyasreechoudhary@gmail.com.`,
        metadata: {
          confidence: 0.5,
          suggestedActions: ['Contact Me', 'Download Resume', 'View Projects']
        }
      });
    }
  } catch (error) {
    console.error('AI Chat Error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
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