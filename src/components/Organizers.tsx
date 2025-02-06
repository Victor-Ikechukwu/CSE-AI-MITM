import React from 'react';

const Organizers = () => {
  const organizers = [
    {
      name: 'Dr. B G Naresh Kumar',
      role: 'Organizing Chair',
      image: 'https://media-hosting.imagekit.io//6e453c9a2bce4d0f/mit-principal.png?Expires=1832748037&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=iCRCwjKMMrNynyVDyCWk9HhRAwlfsEttzCPkw61vipAHVosDvsYfjEUUcA4PKnib7-Je3FM0CbozKNscegFp2sVU733En2VL59v~U3Tz-eOzrXj4sRji9~4U8RHZ2R4TOJOKEnOhAhpjallm2LsjW1tJK8J4ekQBCAA0ZZzY7~1Haz4AjzASOL8rBB00bfkRvYAC9tskgP4yTeTYiwRLiJW1ipmjjwPTdTrs6WsyYBKG318F9zj317SW3Pp1rpDANTSeVfKz1-tK4jtSjUcz9t7gENl-aaSFDAzhdiDsDEBPzu8yNdjPqkgehl8LfvMmkyFve15iD5CKReWAkH~tWg__',
    },
    {
      name: 'Dr. Murali S',
      role: 'Organizing Chair',
      image: 'https://miamsh.com/assets/images/trustee/Dr.MurliS.jpeg',
    },
    {
      name: 'Dr. T Vasudev',
      role: 'Organizing Chair',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmmv4qCqoKV_1bMj0F7byZ5XAAqR4W7kiQQ&s',
    },
    {
      name: 'Dr. Hemanth S R',
      role: 'Convener',
      image: 'https://media-hosting.imagekit.io//21194e73223a4d8e/Screenshot%202025-01-29%20142033.png?Expires=1832748685&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1lhwyfQa5LB6N3tPpsMOb2E87UgVgnp0veKeXo55oSpCj1rt3ix01v9dqLSn5IWDjErdhtwwAs-q0r4pZ4m-SBUqMXMhHMouB2lfT1xuBIYTGKMK6Ug9jqZeL-L0OSy-0bYU0nSe~Q1Ips2J2Td~eptQZPJ-ifelIi3-wXFwehouMZ8IPYl6~1ekcRwvfDVTQ4-1t~SRYRbg4G5PuRcXTYIF5Ph1~6IieJFibpmLU~VGsG~gtbk73vfSm3H~QYviCl0BDRLOGhp0VinvRbT1eSCtKDc74EKSTn6K1hgiDww~2TfynhSLGWAcrAUzbX-j1r2d7u1p6OyNqKuvO3jEbQ__',
    },
    {
      name: 'Dr. Victor A I',
      role: 'Program Coordinator',
      image: 'https://media-hosting.imagekit.io//981b139606324d76/WhatsApp%20Image%202025-01-29%20at%202.14.19%20PM.jpeg?Expires=1832748734&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EJOZ6Knakr94wBMbal2kICkW43-Sh7ucJGaH5hf-6UXP2pBHdB2MO6f6M3WIBte3chr5q~AGj6f0FHpEMZJcGXP9gSY7fOoMFMe92AugTCHss8xyXjUeXBl4~YfsuCGzp88Bo4QYbI0vumRuRNVdLiVkiErpKOXthfwSwyaXnJ1UXAcjEPunyLCp93iT4DdhBQG0ASjPjsVWHCfDW95CmrbVn-7J2impmA4b97w6wTJejfZ~P3AxVps8Vl0aIqzOkqmGNL9GkvxEgVpzjIleDQUC1Cnyz4pshm~Yx7HW6ndgDdkIBldJebu4SZYryVfkyTssN~mfI23hAA7enrYNtA__',
    },
    {
      name: 'Prof. Navya S',
      role: 'Program Coordinator',
      image: 'https://media-hosting.imagekit.io//41211c0945d843ba/Screenshot%202025-01-29%20142249.png?Expires=1832748785&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xx9PhEBZPvjS3uOGiGAI1sCU1v4LRvkcU8CgP~URGt-yk-ZLxfX1r5oq3UoEQcc8NsYvfupRYsHBtWQE4imA2rvj3TyYL~PZ4bW~-ARrlWbG3fIKDmCqJ8TafmUZcbv1p6OBV3WbQ0TKVAQ1A4sp0q8r4C5NuljTsvtPAY~Br4AjGyOgiVu-D4gOagagk6CKdJwI1-EjEupRgbFZ9cgc~g5HYS3dzjgTNnbWVT0k3EnEDBg8Tzh~~h~92VaDKDSSXbN9vnVe8F2PVJxJx9gcTePhKPdJqhV6pzvdFjToMgDpEhF28mAIV7htHFGrcoi2dD1ELJS1maJw6oMHKT8aTQ__',
    },
     {
      name: 'Prof. Vinayashree A S',
      role: 'Program Coordinator',
      image: 'https://media-hosting.imagekit.io//4677edcf4a8c4e16/Screenshot%202025-01-29%20142355.png?Expires=1832748846&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mGtSTz4t1ZZv8tv5fHXpm5lbiEVXrKTkxHOX7javOdLSCXWqdGtTc~KMhabOhg6GIEaDoJzYi-B~uHgzMmutdXE5w~6Hi2KK39dMNNT1PtqrWgZ9EuGro~wcCiIYRGiRgkLBCf2udop2q-BfxxFED8gLbbZn4LS5V6I34NsI8YI-6TFKI1dgxTy4ei15YjDp3Aqgf7TVCkTbzzq0~bMRNR3bgJozIIavSUPgbvBLSra1fxxI00vZEwcS88Yk~xpaC4jnKs8Fz5eUKKnb7hfMnT0xlIUpUMboz8BrKqrFYIQgLO-KCtFzswFdQbXlF81SrSKV-GKVDuMLNYk9pO20cw__',
    },
     {
      name: 'Prof. Shashank H P',
      role: 'Program Coordinator',
      image: 'https://media-hosting.imagekit.io//ae61f1bbb06845ae/Screenshot%202025-01-29%20142440.png?Expires=1832748895&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AorGQDOfJsdA48K4uulWm8RIZBptcDjfJNuIYhmgPcRnL57kVhDuKIUfYTKRjhsAcsbEXFgiLGSvnP4N0xfPe3KXF4um5uu9Y8E2y2ArCuae8sgOCqvs~~YG6pmYRMG8oCSAsPfl3RWqJVROW3U-gwHNDUMGDnA2NJwS0ip~98YMWRgoxUI8Lt-YEvFTRpyefyxlHLiI2Ij1C5yiTVuhaikjqAh8-cyOSiXqsnzQoQD0542sVmJEwB88wvIzsqPqecyygaFqxO6WVRkzJBynKPm6i3meFOBJdy6T5ZmT7Uo6eoF7i~uhnmNWOfBMiCM9Z5y33KK8bDMNGh9rxSLnKg__',
    },
    
  ];

  return (
    <section id="organizers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Organizers
          </h2>
          <p className="text-lg text-gray-600">
            The team behind Workshop and Hackathon 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {organizers.map((organizer, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={organizer.image}
                alt={organizer.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {organizer.name}
              </h3>
              <p className="text-blue-600">{organizer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Organizers;
