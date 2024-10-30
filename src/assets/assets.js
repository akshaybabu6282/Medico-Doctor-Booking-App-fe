import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.jpg'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import logo1 from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import general from './general.png'
import Gynecologist from './gynecologist.png'
import Dermatologist from './dermatologist.png'
import Pediatricians from './pediatrician.png'
import Neurologist from './neurologist.png'
import Gastroenterologist from './gastroenterologist.png' 
import login from './login.avif'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    logo1,
    login
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: general
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. S. Thankam',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: ' 30  Years',
        about: 'Dr. S. Thankam is a well-regarded general physician based in Trivandrum, Kerala. She holds an MBBS and an MD in General Medicine, with a special interest in diabetes and internal medicine. Dr. Thankam is associated with multiple medical institutions, including Credence Hospital and S.K. Hospital.',
        fees: 400,
        address: {
            line1: 'Reshmi, S.R.A - 181, Sastha Nagar',
            line2: 'Pangode, Thirumala, Trivandrum'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Bindhu P.S.',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: ' 22 Years',
        about: 'Dr. Bindhu P.S. is a highly experienced gynecologist and obstetrician practicing in Thiruvananthapuram, with over 22 years of expertise in the field. She specializes in areas such as infertility treatment, hysterectomy, colposcopy, and other women health concerns, including menopause issues and abdominal pain.​',
        fees: 600,
        address: {
            line1: 'Kesavadasapuram-Ulloor Road, Ulloor Junction',
            line2: 'Thiruvananthapuram, Kerala, India'
        }
          
    },
    {
        _id: 'doc3',
        name: 'Dr. Rakhee V. Nair',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '15 Years',
        about: 'Dr. Rakhee V. Nair is a well-known dermatologist based in Trivandrum. She serves as the chief consultant and director at SkinessentiA in Jawahar Nagar, Kowdiar, Trivandrum. In addition, she is a senior consultant dermatologist and cosmetologist.She has advanced training from institutions in India and abroad and is actively involved in academic research and conferences.',
        fees: 300,
        address: {
            line1: 'Near NSS Karayogam Building, Jawahar Nagar',
            line2: ' Kowdiar, Thiruvananthapuram, Kerala'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Deep George',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '10 Years',
        about: 'Dr. Deep George is a highly qualified pediatrician and neonatologist based in Thiruvananthapuram, Kerala. He holds an MBBS and DNB in Pediatrics, where he provides expert care for children, from newborns to adolescents. His clinical focus includes general pediatrics, vaccinations, and the treatment of childhood illnesses such as pneumonia and viral fevers.',
        fees: 400,
        address: {
            line1: 'Near SR Theatre, Thiruvananthapuram',
            line2: 'Kerala, India'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Murali Krishna Menon',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '31 Years',
        about: 'Dr. Murali Krishna Menon is a neurologist with over 31 years of experience in the field​ Advantage Healthcare India Karetrip Vaidam . He specializes in various neurological disorders, including headache management, nerve and muscle disorders, spinal disorders, and epilepsy treatment​ Karetrip Vaidam .',
        fees: 500,
        address: {
            line1: 'Vytilla, Kochi',
            line2: 'Kerala, India'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Bindu Varghese',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '25 Years',
        about: 'Dr. Bindu Varghese is a neurologist with over 25 years of experience, specializing in conditions such as epilepsy, stroke management, and seizure disorders. He holds an MBBS, MD, and DNB in Neurology and has completed a fellowship at Calicut Medical College, along with neonatal intensive care training in Sydney, Australia.​',
        fees: 500,
        address: {
            line1: 'VPS Lakeshore Hospital ,near Police Station,',
            line2: 'Nettoor, Maradu, Kochi, Kerala'
        } 
    },
    {
        _id: 'doc7',
        name: 'Dr. Anjanas',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '15 Years',
        about: 'Dr. Anjana is an experienced ENT specialist based in Kakkanad, Ernakulam. She holds an MBBS degree from Government Medical College, Kozhikode, and an MS in ENT from Government Medical College, Kottayam. With over 15 years of total experience, including 4 years as a specialist, she provides a comprehensive range of ENT services.',
        fees: 500,
        address: {
            line1: 'Ground Floor, Adam Star Building',
            line2: 'Kakkanad, Kochi, Kerala'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Majitha Beevi R',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '20 Years',
        about: 'Dr. Majitha Beevi R is a distinguished gynecologist with over 20 years of experience in the field of Obstetrics and Gynecology. She holds an MBBS degree, along with a DNB (Diplomate of National Board) and a DGO (Diploma in Obstetrics and Gynecology), showcasing her extensive training and expertise.​',
        fees: 600,
        address: {
            line1: 'Credence Hospital, Ulloor',
            line2: 'Trivandrum, Kerala, India'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Vinitha Gopalakrishnan',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '8 Years',
        about: 'Dr. Vinitha Gopalakrishnan is a highly qualified dermatologist based at VPS Lakeshore Hospital and Research Centre in Ernakulam, Kerala. She holds an MBBS and an MD in Dermatology, having excelled academically with a first rank and gold medal during her MD studies.',
        fees: 300,
        address: {
            line1: 'Nettoor, Maradu',
            line2: ' Kochi, Kerala, India'
        } 
    },
    {
        _id: 'doc10',
        name: 'Dr. Nivin Anto John',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '12 Years',
        about: 'Dr. Nivin Anto John is a pediatrician based in Thiruvananthapuram, Kerala. He is affiliated with the Pediatric Department of KIMS Hospital. While specific details about his years of experience were not readily available, pediatricians typically have extensive training and experience in caring for children, including newborns and adolescents.',
        fees: 400,
        address: {
            line1: 'KIMSHEALTH, Anayara P.O',
            line2: 'Trivandrum , Kerala, India​'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Ajay Kumar',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '15 Years',
        about: 'Dr. Ajay Kumar is a consultant neurosurgent . He specializes in neurosurgery and is known for his expertise in handling complex cases, including innovative surgical techniques. Dr. Kumar has been involved in significant surgeries, such as the reconstruction of skull defects following severe infections like mucormycosis, showcasing his proficiency in advanced neurosurgical procedures​',
        fees: 500,
        address: {
            line1: 'Nettoor, Maradu',
            line2: 'Kochi, Kerala, India'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Arun Oommen',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '20 Years',
        about: 'Dr. Arun Oommen is a consultant neurosurgeon at VPS Lakeshore Hospital and Research Centre in Kochi, Kerala. He has a wealth of experience in various neurosurgical fields, including neuro oncology, neuro trauma, and critical care. His extensive training includes a fellowship in neuroendoscopy and significant practice across multiple specialty centers.',
        fees: 500,
        address: {
            line1: 'VPS Lakeshore Hospital, Nettoor, Maradu,',
            line2: ' Ernakulam, Kerala, India'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Antony Paul Chettupuzha',
        image: doc13,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '26 Years',
        about: 'Dr. Antony Paul Chettupuzha is a senior consultant in gastroenterology with over 26 years of experience. He is currently practicing at VPS Lakeshore Hospital in Kochi, Kerala. His medical qualifications include an MBBS from Government Medical College, Thrissur, an MD in Internal Medicine from Government Medical College, Amritsar, and a DM in Gastroenterology from Government Medical College, Kozhikode.',
        fees: 450,
        address: {
            line1: 'NH 66 Bypass, Nettoor, Maradu',      
            line2: 'Kochi, Kerala 682040, India'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Santhamma Mathew',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '30 Years',
        about: 'Dr. Santhamma Mathew is a highly regarded gynecologist and specialist in reproductive medicine, based in Trivandrum, Kerala. With over 30 years of experience in Obstetrics and Gynecology, she has delivered thousands of babies and performed numerous surgeries throughout her career.',
        fees: 600,
        address: {
            line1: 'Credence Hospital, Ulloor',
            line2: 'Thiruvananthapuram, Kerala, India'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Abin Abraham Itty',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '14 Years',
        about: 'Dr. Abin Abraham Itty is a dermatologist based in Kochi, Kerala, with a specialization in dermatology and a notable experience of 14 years. He holds an MD in Dermatology and is also recognized for his expertise in pediatric dermatology and cosmetology.​',
        fees: 500,
        address: {
            line1: 'General Clinic Building, Dhanushkodi Road',
            line2: 'Kolenchery, Kochi, Kerala'
        }
    },
]