import React, { FC } from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import { Link } from "react-router-dom";

type NavigationItemsProps = {
  close?: () => void;
  clicked?: () => void;
};

const NavigationItems: FC<NavigationItemsProps> = (props) => {
  const menuItems = [
    {
      title: "Products",
      columns: [
        {
          details: [
            {
              title: "Talent Sourcing",
              url: "https://reacthq.dev",
            },
            { title: "Payroll Mgmt", url: "/payroll" },
          ],
        },
        {
          details: [
            { title: "Core-HR", url: "/" },
            { title: "Performance", url: "/performance" },
          ],
        },
        { details: [{ title: "Attendance", url: "/attendance" }] },
      ],
    },
    {
      title: "Company",
      columns: [
        {
          details: [
            { title: "About Us", url: "/about" },
            { title: "Blog", url: "/" },
            { title: "Terms of Service", url: "/terms-of-service" },
          ],
        },
        {
          details: [
            { title: "Contact Us", url: "/contact" },
            { title: "Support Center", url: "/" },
          ],
        },
        {
          details: [
            { title: "FAQs", url: "/pricing/#faqs" },
            { title: "Privacy", url: "/privacy" },
          ],
        },
      ],
    },
  ];

  return (
    <ul className="NavigationItems">
      {menuItems.map((item) => {
        return (
          <div key={item.title} className="dropdown">
            <NavigationItem>
              {item.title}
              <i className="fas fa-chevron-down"></i>
            </NavigationItem>
            <div className="dropdown-content">
              {item.columns.map((column, index) => {
                return (
                  <ul key={index * Math.random()} className="p-2">
                    {column.details.map((list) => {
                      return (
                        <li onClick={props.close} key={list.title}>
                          <Link to={list.url}>{list.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
            </div>
          </div>
        );
      })}

      <NavigationItem clicked={props.close} link="/pricing">
        Pricing
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
