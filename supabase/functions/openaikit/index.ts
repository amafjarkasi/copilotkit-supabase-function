import "https://deno.land/x/xhr@0.3.0/mod.ts";
import OpenAI from "https://esm.sh/openai@4.47.3";
import {
  CopilotRuntime,
  OpenAIAdapter,
} from "https://esm.sh/@copilotkit/backend@0.37.0";

const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");

Deno.serve(async (req) => {
  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
  });

  const copilotKit = new CopilotRuntime();
  return await copilotKit.response(
    req,
    new OpenAIAdapter({ openai: openai }),
  );
});
