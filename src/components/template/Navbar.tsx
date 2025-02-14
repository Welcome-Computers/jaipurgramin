/* eslint-disable @next/next/no-img-element */
import { Menu } from 'antd';
import Title from 'antd/es/typography/Title';
import Link from 'antd/es/typography/Link';
import React, { useState } from 'react';

const Navbar = () => {
  const categories = [
    {
      name: 'Music',

      images: [
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
          title: 'iTunes is Now the Second Biggest Name in Music World Giants',
          date: 'September 29, 2021',
        },
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/4-696x464.jpg',
          title: 'Concert Shows Will Stream on Netflix, Amazon and Hulu this Year',
          date: 'September 29, 2021',
        },
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/3-696x464.jpg',
          title: ' Pixar Brings it’s Animated Movies to Life with Studio Music',
          date: 'September 29, 2021',
        },
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/2-696x464.jpg',
          title: 'For Composer Drew Silva, Music is all About Embracing Life',
          date: 'September 29, 2021',
        },
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/1-696x464.jpg',
          title: 'Burberry is the First Brand to get an Apple Music Channel Line',
          date: 'September 29, 2021',
        },
      ],
    },
    {
      name: 'Celebrity',
      images: [
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/10-696x464.jpg',
          title: 'Kristen Stewart Visits the Toronto Film Festival with New Boyfriend',
          date: 'September 29, 2021',
        },
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/9-696x464.jpg',
          title: 'Celebrity Make-up Artist Gary Meyers Shows you His Beauty Tricks',
          date: 'September 29, 2021',
        },
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/8-696x464.jpg',
          title: ' The Biggest Hollywood Celebrities Visit the Ranches of California',
          date: 'September 29, 2021',
        },
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/6-696x464.jpg',
          title: 'The Most Popular Celebrity Name List of the Millennium is Here',
          date: 'September 29, 2021',
        },
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/7-696x465.jpg',
          title: 'Fashion Finder: Biggest Shows, Parties and Celebrity for New Years',
          date: 'September 29, 2021',
        },
      ],
    },
    {
      name: 'Politics',
      images: [
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/30-696x464.jpg',
          title: 'The Politics Behind Marocco’s Stock Market Turbulence Last Year',
          date: 'September 29, 2021',
        },
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/29-696x392.jpg',
          title: 'Expanding Peacefull Political Climate Gears up for this Election',
          date: 'September 29, 2021',
        },
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/28-696x464.jpg',
          title: ' Things You Didn’t Know About the American Past Politicians',
          date: 'September 29, 2021',
        },
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/27-696x464.jpg',
          title: 'New Harvard Student Candidates Presented Minutes Before Results',
          date: 'September 29, 2021',
        },
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/26-696x464.jpg',
          title: 'Sanders Gets Respectful Welcome at Conservative College',
          date: 'September 29, 2021',
        },
      ],
    },
    {
      name: 'Finance',
      images: [
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/30-696x464.jpg',
          title: 'The Politics Behind Marocco’s Stock Market Turbulence Last Year',
          date: 'September 29, 2021',
        },
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/29-696x392.jpg',
          title: 'Expanding Peacefull Political Climate Gears up for this Election',
          date: 'September 29, 2021',
        },
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/28-696x464.jpg',
          title: ' Things You Didn’t Know About the American Past Politicians',
          date: 'September 29, 2021',
        },
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/27-696x464.jpg',
          title: 'New Harvard Student Candidates Presented Minutes Before Results',
          date: 'September 29, 2021',
        },
        {
          image: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/26-696x464.jpg',
          title: 'Sanders Gets Respectful Welcome at Conservative College',
          date: 'September 29, 2021',
        },
      ],
    },
    {
      name: 'Travel',
      image1: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image2: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image3: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image4: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image5: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image6: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
    },
    {
      name: 'Food',
      image1: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image2: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image3: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image4: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image5: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image6: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
    },
    {
      name: 'Marketing',
      image1: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image2: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image3: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image4: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image5: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image6: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
    },
    {
      name: 'Tech',
      image1: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image2: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image3: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image4: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image5: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image6: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
    },
    {
      name: 'Make-up',
      image1: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image2: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image3: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image4: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image5: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
      image6: 'https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/09/5-696x464.jpg',
    },
  ];
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <>
      <div>
        <Menu className="navbar_header" mode="horizontal">
          {categories.map((category) => (
            <Menu.Item className="navbar_item" key={category.name} onMouseEnter={() => setHovered(category.name)} onMouseLeave={() => setHovered(null)}>
              <Link>{category.name}</Link>

              {hovered === category.name && (
                <div className="navbar_content">
                  <div className="navbar_content_items">
                    {category.images?.map((item, index) => {
                      return (
                        <div className="navbar_dropdown_content" key={index}>
                          <img src={item.image} alt={item.title} />
                          <div className="navbar_date">
                            <Title level={5}>{item.title}</Title>
                            <p>{item.date}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </>
  );
};

export default Navbar;
