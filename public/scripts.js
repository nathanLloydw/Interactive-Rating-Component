$( document ).ready(function()
{
    console.log('ready');
    $('#support-form').on('click',function()
    {
        let review = $('input[name="support_review"]:checked')[0];

        if(review)
        {
            $('#thank-you-message')[0].innerText = 'You selected '+review.value+' out of 5';
            $('#form-body')[0].classList.add('hidden');
            $('#form-response')[0].classList.remove('hidden');
        }
    });
});