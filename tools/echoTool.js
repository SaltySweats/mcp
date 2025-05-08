export const echoTool = async (input) => {
  return { message: `Echo: ${input.message || 'No message provided'}` };
};