const hash = window.location.hash;
console.log(hash);
const hashList = [
	'#get-contact-lenses',
	'#reasonable-prescription-glasses',
	'#eye-exams-near-me',
	'#eye-doctor-near-me',
	'#brand-name-prescription-eyewear',
	'#optometrist-near-me',
	'#optician-near-me',
];

const generateTitle = (hash) => {
	if (hash === '#get-contact-lenses') {
		return 'Get Contact Lenses';
	} else if (
		hash === '#reasonable-prescription-glasses'
	) {
		return 'Reasonable Prescription Glasses';
	} else if (hash === '#eye-exams-near-me') {
		return 'Eye Exams Near Me';
	} else if (hash === '#eye-doctor-near-me') {
		return 'Eye Doctor Near Me';
	} else if (
		hash === '#brand-name-prescription-eyewear'
	) {
		return 'Brand Name Prescription Eyewear';
	} else if (hash === '#optometrist-near-me') {
		return 'Optometrist Near Me';
	} else if (hash === '#optician-near-me') {
		return 'Optician Near Me';
	}
};

const paragraph = [
	`There are some people in Mississauga, ON, Canada who just look better when they are wearing glasses. Their glasses are part of their style, and they most likely have more than one pair so that they can change their look. Those people shop for their glasses at Glaze Opticals. They know that we have plenty of styles to choose from and that our prices are affordable. 
    If you are looking for custom glasses, you do not need to look any further than Glaze Opticals. We would be happy to work with you until you find something that is going to fit your personality. Our custom glasses are also high quality, they are meant to last. If you are the type of person who prefers to wear glasses, we think that you will like what we are all about. We also have a great selection of prescription sunglasses so that you will be able to see even on a sunny day.  
    Of course, not everyone likes wearing glasses. That is why we at Glaze Opticals are also the place to go to get contact lenses. We have all of the popular brands and our prices are reasonable. We want people who do not want to wear glasses to be happy when they visit us. Of course, there are some people who sometimes want to wear glasses, but prefer to wear contacts at other times. You can get contact lenses and stylish glasses at Glaze Opticals. If you live in Brampton, Malton, or Mississauga, ON, Canada, or if you are from a town that is in the area, remember the name Glaze Opticals. If you wear glasses from us, you will receive compliments on how good they look. If you prefer to wear contacts, you will look great and have better vision at the same time.`,
	`Have you recently moved to Brampton, ON, Canada? If so, welcome to the area! There are things that you need to do whenever you move to a new area. One of the things that you need to do is to find new medical professionals. You should look for someone for ‘eye exams near me’, even if you think that you have perfect vision. There is only one place that you need to go for the exam, and that is Glaze Opticals. We can make sure that your eyes are healthy. 
    Another problem that people sometimes have when they move is that they are not sure where to go for reasonable prescription glasses. Again, the name to remember is Glaze Opticals. We have plenty of styles to choose from. It is our goal to make sure that you look great in your new glasses. We are also proud of the fact that our glasses are affordable. We believe that you do not need to pay a lot of money to have quality glasses. We think that reasonable prescription glasses make a lot more sense than paying too much. 
    If you have not had an eye exam in a long time, you need to stop by Glaze Opticals right away. Even if you wear glasses, your prescription might have changed. If you live in Malton, Vaughan, or Brampton, ON, Canada and are looking for ‘eye exams near me’, you need to make an appointment with Glaze Opticals. We think that you will like our selection of glasses, prescription sunglasses, and contact lenses as well. At Glaze Opticals, we want to do our part in taking good care of your eyes, but we can’t do that if you don’t stop by. Make sure that you take care of your eyes and make an appointment for an exam at Glaze Opticals.`,
	`Have you recently moved to Brampton, ON, Canada? If so, welcome to the area! There are things that you need to do whenever you move to a new area. One of the things that you need to do is to find new medical professionals. You should look for someone for ‘eye exams near me’, even if you think that you have perfect vision. There is only one place that you need to go for the exam, and that is Glaze Opticals. We can make sure that your eyes are healthy. 
    Another problem that people sometimes have when they move is that they are not sure where to go for reasonable prescription glasses. Again, the name to remember is Glaze Opticals. We have plenty of styles to choose from. It is our goal to make sure that you look great in your new glasses. We are also proud of the fact that our glasses are affordable. We believe that you do not need to pay a lot of money to have quality glasses. We think that reasonable prescription glasses make a lot more sense than paying too much. 
    If you have not had an eye exam in a long time, you need to stop by Glaze Opticals right away. Even if you wear glasses, your prescription might have changed. If you live in Malton, Vaughan, or Brampton, ON, Canada and are looking for ‘eye exams near me’, you need to make an appointment with Glaze Opticals. We think that you will like our selection of glasses, prescription sunglasses, and contact lenses as well. At Glaze Opticals, we want to do our part in taking good care of your eyes, but we can’t do that if you don’t stop by. Make sure that you take care of your eyes and make an appointment for an exam at Glaze Opticals.`,
	`When was the last time that you saw someone about your vision? Do you currently wear glasses? Do you have a problem seeing things in the distance? When you need to read something, have you found that you need to hold the paper farther away than you used to? It is important to have your vision checked on a regular basis. Not only will you then know that you have the proper prescription if you need one, but there are also tests for several different conditions. Many of these conditions can be better treated if they are caught early. If you live in Malton, ON, Canada and are not sure where to go for an eye exam, you need to contact Glaze Opticals. We want to help you to keep your eyes healthy. 
    If you are looking for a 'Eye Doctor Near Me', you need to head to Glaze Opticals. We can help you out. We know that it is important to see someone regularly to make sure that everything is fine. At Glaze Opticals, we will look for problems and changes in your prescription. 
    If you need glasses, at Glaze Opticals we feature brand name prescription eyewear. Just because we carry brand names does not mean that you will need to pay a lot of money for your new glasses. Our brand name prescription eyewear is also affordable. You will love the way that you look in your new glasses. Don’t forget to get sunglasses as well! At Glaze Opticals, we have customers from Vaughan, Etobicoke, and Malton, ON, Canada, as well as the surrounding areas. If you would like to look great and also see better, you need to check out Glaze Opticals right away. We are sure that you will like the large variety of frames and glasses that we have here.`,
	`When was the last time that you saw someone about your vision? Do you currently wear glasses? Do you have a problem seeing things in the distance? When you need to read something, have you found that you need to hold the paper farther away than you used to? It is important to have your vision checked on a regular basis. Not only will you then know that you have the proper prescription if you need one, but there are also tests for several different conditions. Many of these conditions can be better treated if they are caught early. If you live in Malton, ON, Canada and are not sure where to go for an eye exam, you need to contact Glaze Opticals. We want to help you to keep your eyes healthy. 
    If you are looking for a 'Eye Doctor Near Me', you need to head to Glaze Opticals. We can help you out. We know that it is important to see someone regularly to make sure that everything is fine. At Glaze Opticals, we will look for problems and changes in your prescription. 
    If you need glasses, at Glaze Opticals we feature brand name prescription eyewear. Just because we carry brand names does not mean that you will need to pay a lot of money for your new glasses. Our brand name prescription eyewear is also affordable. You will love the way that you look in your new glasses. Don’t forget to get sunglasses as well! At Glaze Opticals, we have customers from Vaughan, Etobicoke, and Malton, ON, Canada, as well as the surrounding areas. If you would like to look great and also see better, you need to check out Glaze Opticals right away. We are sure that you will like the large variety of frames and glasses that we have here.`,
	`How well do you take care of your eyes? Is your vision something that you take for granted? You probably see a doctor on a regular basis and you know that it is an important thing to do in order to stay healthy. Why do people not treat their eyes the same way? Do you even know an ‘optometrist near me’? If you live in Vaughan, ON, Canada and are overdue for an eye appointment, you need to contact Glaze Opticals right away. We would be more than happy to set up the appointment for you. 
    If you are not sure where to go when looking for 'Optician Near Me', you need to contact Glaze Opticals. We have professionals here that will take good care of your eyes. If you are putting off making an eye doctor appointment because you do not have time, you no longer have an excuse. We have a flexible schedule so that you can come whenever you are available. 
    At Glaze Opticals, we also have the glasses that you are looking for. We have brand names and we also have prescription sunglasses. You will love the choices that we offer. In fact, you might decide to buy more than one pair. If you do not want to always wear glasses, we also sell contact lenses. If you have been looking for an ‘optometrist near me’, you need to make an appointment with Glaze Opticals. We have patients and customers from Etobicoke, Mississauga, and Vaughan, ON, Canada, as well as the surrounding areas. If you have not seen an optometrist in a long time, you need to make an appointment at Glaze Opticals. It does not matter if you currently wear glasses or you don’t; you should see an eye doctor on a regular basis. Do not put it off any longer. Contact Glaze Opticals today.`,
	`How well do you take care of your eyes? Is your vision something that you take for granted? You probably see a doctor on a regular basis and you know that it is an important thing to do in order to stay healthy. Why do people not treat their eyes the same way? Do you even know an ‘optometrist near me’? If you live in Vaughan, ON, Canada and are overdue for an eye appointment, you need to contact Glaze Opticals right away. We would be more than happy to set up the appointment for you. 
    If you are not sure where to go when looking for 'Optician Near Me', you need to contact Glaze Opticals. We have professionals here that will take good care of your eyes. If you are putting off making an eye doctor appointment because you do not have time, you no longer have an excuse. We have a flexible schedule so that you can come whenever you are available. 
    At Glaze Opticals, we also have the glasses that you are looking for. We have brand names and we also have prescription sunglasses. You will love the choices that we offer. In fact, you might decide to buy more than one pair. If you do not want to always wear glasses, we also sell contact lenses. If you have been looking for an ‘optometrist near me’, you need to make an appointment with Glaze Opticals. We have patients and customers from Etobicoke, Mississauga, and Vaughan, ON, Canada, as well as the surrounding areas. If you have not seen an optometrist in a long time, you need to make an appointment at Glaze Opticals. It does not matter if you currently wear glasses or you don’t; you should see an eye doctor on a regular basis. Do not put it off any longer. Contact Glaze Opticals today.`,
];

if (hashList.includes(hash)) {
	const hashNumber = hashList.indexOf(hash);
	console.log(hashNumber);

	const h1 = document.querySelector('#title');
	h1.textContent = generateTitle(hash);

	const p = document.querySelector('#desc');
	p.textContent = paragraph[hashNumber];
}
