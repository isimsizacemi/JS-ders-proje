const form = document.querySelector('.question-form');

const result = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();

    let score= 0 ; 

    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    userAnswers.forEach((answer) => {
        if ( answer === "T") {
            score +=25;
        }
    });
    
    result.classList.remove('d-none');

    let puan = 0;

    const bas = setInterval(() => {
        result.querySelector('span').textContent = `${puan} %`;

        if ( puan == score ){
          
            clearInterval(bas);
        }

        else{puan++ ; }
       
    
    },20);
    
    if(score > 50){
        const sonuc = "GARA DEMLİK KAZNADIN..." 
        setTimeout(() => {
            sweet(score,sonuc);
        }, 3000);
        
   }else{
        const sonuc = "DEMLİK GTUNUZE SOKULUYOR..." 
        setTimeout(() => {
            sweet(score,sonuc);
        }, 2000);
   }
   
   
});

function sweet(score,sonuc) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    });

    const swalConfig = {
        title: 'Sınav Sonucunuz',
        text: "Merhaba Bu sonuçla sadece başını alırsınız",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Tekrar dene!',
        cancelButtonText: 'Sınavı Bitir!',
        reverseButtons: true
    };

    swalWithBootstrapButtons.fire(swalConfig).then(result => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire('UYARI!', 'SINAV TEKRARLANIYOR...', 'danger')
            
            setTimeout(() => {
                window.location.reload();
            }, 2000);
            
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(sonuc, 'Sınav Bitti :)', 'Success');
        }
    });
}