const body = document.querySelector("body")
body.classList.add("bg-[#dff0fe]","h-screen","flex","items-center","justify-center")

const s1 = document.createElement("section");
s1.classList.add("w-[384px]","bg-white","rounded-[24px]","shadow-lg")

const s2 = document.createElement("div");
s2.classList.add("bg-[#0284c7]","text-white","px-[18px]","py-[14px]","rounded-t-[24px]")

const s3 = document.createElement("div");
s3.classList.add("text-[20px]","font-bold")
s3.textContent = "💬 Чат 6 «Б»"

const s4 = document.createElement("div");
s4.classList.add("flex","items-center","gap-[6px]","text-[14px]")

const s5 = document.createElement("div");
s5.classList.add("w-[16px]","h-[16px]","rounded-[500px]","bg-green-500")

const s6 = document.createElement("div");
s6.textContent = "В сети: 4 человека"

const s7 = document.createElement("div");
s7.classList.add("p-[16px]")

const s8 = document.createElement("div");
s8.classList.add("bg-yellow-100","text-yellow-800","font-bold","rounded-[16px]","px-[14px]","py-[10px]","mb-[12px]")
s8.textContent = "📌 Учитель: экзамен в пятницу в 14:00"

const s9 = document.createElement("div");
s9.classList.add("w-[155px]","bg-gray-100","text-black","rounded-[16px]","px-[14px]","py-[8px]","mb-[12px]")

const s10 = document.createElement("div");
s10.classList.add("text-[13px]","font-bold")
s10.textContent = "Али"

const s11 = document.createElement("div");s11.classList.add("text-[16px]")
s11.textContent = "Привет всем! 👋"

const s12 = document.createElement("div");
s12.classList.add("w-[293px]","ml-auto","bg-sky-500","text-white","rounded-[16px]","px-[14px]","py-[8px]","mb-[12px]")

const s13 = document.createElement("div");
s13.classList.add("text-[13px]","font-bold")
s13.textContent = "Амир"

const s14 = document.createElement("div");
s14.classList.add("text-[16px]")
s14.textContent = "Привет! Кто сделал домашку по JS?"

const s15 = document.createElement("div");
s15.classList.add("w-[196px]","bg-gray-100","text-black","rounded-[16px]","px-[14px]","py-[8px]","mb-[12px]")

const s16 = document.createElement("div");
s16.classList.add("text-[13px]","font-bold")
s16.textContent = "Сара"

const s17 = document.createElement("div");
s17.classList.add("text-[16px]")
s17.textContent = "Я сделала, там 5 задач"

const s18 = document.createElement("div");
s18.classList.add("w-[175px]","ml-auto","bg-sky-500","text-white","rounded-[16px]","px-[14px]","py-[8px]","mb-[12px]")

const s19 = document.createElement("div");
s19.classList.add("text-[13px]","font-bold")
s19.textContent = "Амир"

const s20 = document.createElement("div");
s20.classList.add("text-[16px]")
s20.textContent = "Супер, спасибо! 🙏"

const s21 = document.createElement("div");
s21.classList.add("w-[244px]","bg-gray-100","text-black","rounded-[16px]","px-[14px]","py-[8px]")

const s22 = document.createElement("div");
s22.classList.add("text-[13px]","font-bold")
s22.textContent = "Мадина"

const s23 = document.createElement("div");
s23.classList.add("text-[16px]")
s23.textContent = "Не забудьте: завтра экзамен!"

s4.append(s5)
s4.append(s6)

s2.append(s3)
s2.append(s4)

s9.append(s10)
s9.append(s11)

s12.append(s13)
s12.append(s14)

s15.append(s16)
s15.append(s17)

s18.append(s19)
s18.append(s20)

s21.append(s22)
s21.append(s23)

s7.append(s8)
s7.append(s9)
s7.append(s12)
s7.append(s15)
s7.append(s18)
s7.append(s21)

s1.append(s2)
s1.append(s7)

body.append(s1)