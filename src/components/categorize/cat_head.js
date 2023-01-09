import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import person from "../../photo/category.png";
import styles from "../categorize/cat_head.css";

export default function CatHead() {
    
    const ref = useRef([])
    const [items, set] = useState([])
    const transitions = useTransition(items, {
      from: {
        opacity: 0,
        height: 0,
        innerHeight: 0,
        transform: 'perspective(600px) rotateX(0deg)',
        color: '#8fa5b6',
      },
      enter: [
        { opacity: 1, height: 80, innerHeight: 80 },
        { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
        { transform: 'perspective(600px) rotateX(0deg)' },
      ],
      leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
      update: { color: '#28b4d7' },
    })
  
    const reset = useCallback(() => {
      ref.current.forEach(clearTimeout)
      ref.current = []
      set([])
      ref.current.push(setTimeout(() => set(['Our', 'Category', 'Anetiquette']), 2000))
      ref.current.push(setTimeout(() => set(['Search', 'Anything']), 5000))
      ref.current.push(setTimeout(() => set(["",'Category']), 8000))
    }, [])
  
    useEffect(() => {
      reset()
      return () => ref.current.forEach(clearTimeout)
    }, [])
  

  

  return (
    <div className="categorydecor mb-5" style={{ height: "50vh" }}>
      <div className="row row-cols-2">
        <div className="col-5 p-1 d-flex flex-row-reverse   my-5 cathead_img">
          <img   src={person} style={{ width: "30rem", height: "30rem" }}></img>
        </div>
        <div className="col-7 my-5 p-5 cathead_text_contain">
        <div className={styles.container}>
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div className={styles.transitionsItem} style={rest} onClick={reset}>
            <animated.div className="cathead_text" style={{ overflow: 'hidden', height: innerHeight, fontWeight:"bold", fontSize:"3.5em" }}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}
