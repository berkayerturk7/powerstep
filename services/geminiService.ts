import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateProjectScope = async (userProblem: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
        Sen Power Step şirketinin uzman bir Power Platform ve Dijital Dönüşüm danışmanısın.
        Kullanıcı sana işindeki bir manuel süreçten veya problemden bahsedecek.
        
        Görevin:
        1. Bu sorunu çözmek için hangi Microsoft teknolojilerini (Power Apps, Power Automate, SharePoint, Power BI) kullanabileceğimizi kısaca açıkla.
        2. Tahmini olarak bu projenin ne kadar zaman kazandıracağını vurgula.
        3. Profesyonel, güven verici ve "satış odaklı ama teknik derinliği olan" bir dille yanıt ver.
        4. Yanıtın Türkçe olmalı ve 3 kısa paragrafı geçmemeli.
        
        Kullanıcı Sorunu: ${userProblem}
      `,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Üzgünüm, şu an yanıt oluşturulamadı.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Bağlantı sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.";
  }
};