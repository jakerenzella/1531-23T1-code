const genCongratMark = (markstr: string) => {
  const ret = (name: string) => `Congratulations ${name} on your ${markstr}`;
  return ret;
};

const congratMarkPS = genCongratMark("pass");
// congratMarkPs -> (name: string) => `Congratulations ${name} on your pass`
const congratMarkCR = genCongratMark("credit");
// congratMarkPs -> (name: string) => `Congratulations ${name} on your credit`
const congratMarkDN = genCongratMark("distinction");
// congratMarkPs -> (name: string) => `Congratulations ${name} on your distinction`

console.log(congratMarkPS("Jake"));
