import React from "react";
import '../styles/Testimonial.scss'

const Testimonial = () => {
    const testi = [
        {
            name: 'Cendekia Luthfieta Nazalia',
            text: 'Pertama terlibat project bareng di internship BPKP. Dia sosok yang easy going, passionate, also always gets things done. Khususnya untuk detail dari apa yang dia kerjakan karena dia orang yang selalu conerned sama experience user.'
        },
        {
            name: 'Muhammad Rafly Syahputra',
            text: 'Emil adalah teman satu team saya, dia berada pada bagian front end dan saya adalah backend, selama bekerja bersama emil, emil selalu membuat saya terkagun dengan design yang di tawarkan, dia juga adalah pribadi yang riang sehingga menjadi power up untuk team saat team sedang tidak baik baik saja.'
        },
        {
            name: 'Cendekia Luthfieta Nazalia',
            text: 'Pertama terlibat project bareng di internship BPKP. Dia sosok yang easy going, passionate, also always gets things done. Khususnya untuk detail dari apa yang dia kerjakan karena dia orang yang selalu conerned sama experience user.'
        },
        {
            name: 'Muhammad Rafly Syahputra',
            text: 'Emil adalah teman satu team saya, dia berada pada bagian front end dan saya adalah backend, selama bekerja bersama emil, emil selalu membuat saya terkagun dengan design yang di tawarkan, dia juga adalah pribadi yang riang sehingga menjadi power up untuk team saat team sedang tidak baik baik saja.'
        }
    ]
    return(
        <div className="container" id="testi">
            <div className="testimonial">
                <div className="testimonial-intro">
                    <h1>What they said</h1>
                    <p>Testimonial ini diambil dari orang - orang yang pernah menjadi rekan kerja, atau membutuhkan jasa saya sebagai frontend developer ataupun UI/UX designer.</p>
                </div>
                <div className="testimonial-card">
                    {testi.map((item, index) => 
                        <div className="testimonial-card-item" key={index}>
                            <h2>{item.name}</h2>
                            <p>{item.text}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Testimonial