const genCongratMark = (markstr: string) => {
  const ret = (name: string) => `Congratulations ${name} on your ${markstr}`;
  return ret;
};

const congratMarkPS = genCongratMark("pass");
const congratMarkCR = genCongratMark("credit");
const congratMarkDN = genCongratMark("distinction");

console.log(congratMarkPS("Jake"));
