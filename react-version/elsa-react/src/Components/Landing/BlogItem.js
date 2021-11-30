import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import {
 
  BlogContainer,
  ImageContainer,
  BlogContent,
  ReadMore,
  BlogTitle,
  BlogBody,
  Featured,
} from "../../styles/blogs.module.scss";
function BlogItem() {
    return (
      <div className={BlogContainer}>
        <div className={ImageContainer}>
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdXNlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="blog"
          />
          <div className={Featured}>
            <p>1</p>
          </div>
        </div>
        <div className={BlogContent}>
          <div className={BlogTitle}>
            Arrange A Minimalist Layout For Your Living Room
          </div>
          <div className={BlogBody}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              doloremque tenetur dolore totam cupiditate voluptates, quos eum
              incidunt, exercitationem perspiciatis magnam. Magnam, nostrum
              iusto in omnis officia dolorum quae veniam. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Et magni repudiandae nobis
              dolorum quod eum aliquam, aspernatur explicabo commodi facilis
              corrupti illum possimus minima quos dolor amet quas error eveniet!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae facilis tempore odit at qui laudantium voluptas, error
              deleniti enim adipisci assumenda, minima soluta esse modi in, nam
              eaque. Facere, illo! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cumque explicabo iste aliquid placeat tempora?
              Molestias consequuntur quas ullam eligendi in. Quibusdam facere
              assumenda quos optio impedit ducimus deserunt numquam ullam!
            </p>
          </div>
        </div>

        <div className={ReadMore}>
          <BsArrowRight />
          <p>Read More</p>
        </div>
      </div>
    );
}

export default BlogItem
