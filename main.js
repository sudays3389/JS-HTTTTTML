const body = document.querySelector("body")


const modarw = document.createElement("section");
modarw.classList.add("w-[500px]","h-[1200px]","bg-black")

const srx = document.createElement("div");



srx.classList.add("p-[200px]","text-red-500","w-[50px]","h-[100px]","bg-red-500","rounded-[500px]");

const zard = document.createElement("div");



zard.classList.add("p-[200px]","text-yellow-500","w-[100px]","h-[100px]","bg-yellow-300","rounded-[500px]");

const sabz = document.createElement("div");



sabz.classList.add("p-[200px]","text-sabz-500","w-[100px]","h-[100px]","bg-green-500","rounded-[500px]");

modarw.append(srx)
modarw.append(zard)
modarw.append(sabz)

body.append(modarw)