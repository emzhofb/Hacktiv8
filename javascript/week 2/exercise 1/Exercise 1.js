/*
 Exercises 1

 1. Newton Second Law

    Pseudocode
        STORE "m" with any value
        STORE "a" with any value
        STORE "hasil" without any value

        CALCULATE "m" times "a"
        SET "hasil" value with calculation result
    
        DISPLAY "hasil"

2. Tahun Kabisat

    Algoritma
        Masukkan "Tahun"
        Jika "tahun" habis dibagi 4 dan tidak habis dibagi 100
            Maka "tahun" tersebut adalah 'tahun kabisat'
                Jika tidak maka 'bukan tahun kabisat'
        Jika "tahun" habis di bagi 4 dan habis dibagi 100 dan juga habis dibagi 400
            Maka "tahun" tersebut adalah 'tahun kabisat'
                Jika tidak maka 'bukan tahun kabisat'
        Selesai

    Pseudocode
        STORE "tahun" with any value
        STORE "hasil" without any value

        CALCULATE "tahun" % 4 and not% 100
            IF yes then "tahun" is kabisat
                IF not then "tahun" is not kabisat
        CALCULATE "tahun" % 4 and % 100 and also % 400
            IF yes then "tahun" is kabisat
                IF not then "tahun" is not kabisat

        DONE

3. Laundry Day

    Algoritma
        Masukkan "pakaian" kedalam 'mesin cuci'
        Hitunglah "pakaian" yang ada dalam 'mesin cuci'
            Jika "pakaian" berjumlah 20 maka nyalakan 'mesin cuci'
                Jika "pakaian" belum berjumlah 20 maka masukkan pakaian lain kedalam 'mesin cuci'
                    Dan seterusnya...
        Selesai

    Pseudocode
        STORE "pakaian" with any value
        STORE "pakaian" until 20

        CALCULATE "pakaian"
            IF 20 then turn on 'mesin cuci'
                IF ELSE less than 20 then STORE "pakaian" again
                    DO until "pakaian" have value of 20
        DONE

4. Periksa Kuku

    Algoritma
        Guru memeriksa "kuku" murid
            Jika "kuku" murid panjang
                Maka guru akan menghukum murid
            Jika "kuku" murid tidak panjang
                Maka guru akan memuji murid
        Selesai

    Pseudocode
        CHECK "kuku"
            IF "kuku" long
                THEN teacher punish student
            IF "kuku" short
                THEN teacher appreciate student
        DONE
 */