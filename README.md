# CopilotKit Supabase Edge Function

Edge function for Supabase to handle CopilotRuntime endpoints


(https://www.copilotkit.ai/)

(https://supabase.com/docs/guides/functions)

### Deploy edge function
```supabase functions deploy --no-verify-jwt openaikit```

### Set env file
```supabase secrets set --env-file ./supabase/.env.local```

### Example API call
```json
{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Say this is a test!"}],
     "temperature": 0.7
}
```
