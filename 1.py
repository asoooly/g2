import random

# اختيار رقم عشوائي بين 1 و 100
secret_number = random.randint(1, 100)

print("مرحبًا بك في لعبة تخمين العدد!")
print("أنا اخترت رقمًا بين 1 و 100. هل يمكنك تخمينه؟")

# عدد المحاولات التي قام بها اللاعب
guesses_taken = 0

while True:
    # طلب تخمين العدد من اللاعب
    guess = int(input("اخمن الرقم: "))

    # زيادة عدد المحاولات
    guesses_taken += 1

    # التحقق من صحة التخمين
    if guess < secret_number:
        print("رقمك أصغر من الرقم السري!")
    elif guess > secret_number:
        print("رقمك أكبر من الرقم السري!")
    else:
        # عندما يتم تخمين الرقم الصحيح
        print(f"تهانينا! لقد تخمنت الرقم الصحيح في {guesses_taken} محاولة.")
        break
