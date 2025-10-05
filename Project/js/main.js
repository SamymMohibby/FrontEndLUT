// FAQ section

document.addEventListener('DOMContentLoaded' , () => {
    const faqContainer = document.querySelector('.faq-content');
    faqContainer.addEventListener('click', (e) => {
//Save for later, useful        console.log(e.target); 
       const groupHeader = e.target.closest('.faq-group-header');
       
       if(!groupHeader) {
        return;
       }
       
//       console.log(groupHeader);

       const group = groupHeader.parentElement;
       const groupBody = group.querySelector('.faq-group-body');
       const icon = groupHeader.querySelector('i');

       //Toggling
       icon.classList.toggle('fa-plus');
       icon.classList.toggle('fa-minus');

       //Visibility
       groupBody.classList.toggle('open');

       //closing other faq bodies

        const otherGroups = faqContainer.querySelectorAll('.faq-group');

       otherGroups.forEach((otherGroup) => {
        if(otherGroup !== group) {
            const otherGroupBody = otherGroup.querySelector('.faq-group-body');
            const otherIcon = otherGroup.querySelector('.faq-group-header i');
            otherGroupBody.classList.remove('open');
            otherIcon.classList.remove('fa-minus');
            otherIcon.classList.add('fa-plus')
        }
       });
    });
});


