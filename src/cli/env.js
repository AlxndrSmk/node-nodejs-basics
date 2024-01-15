export const parseEnv = () => {
  Object.entries(process.env)
    .map(([key, value]) => `RSS_${key}=${value}`)
    .forEach((el) => {
      console.log(el + ';');
    });
};

parseEnv();
