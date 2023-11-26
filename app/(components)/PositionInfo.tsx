'use client'

import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { tokens } from "../(assets)/designTokens";
import { PositionType } from "../page";

const colors = tokens.colors

interface Props {
  styles: string;
  activePosition: PositionType | null;
  setPosition: Dispatch<SetStateAction<[] | PositionType[]>>;
  positions: PositionType[] | [];
}

const initialState = {
  name: "",
  product: false,
  price: false,
  analytics: false,
  duel: false,
  claims: false,
  purchase: false,
  hr: false,
  assign_positions: false,
  dismiss: false,
}

const PositionInfo = ({ styles, activePosition, setPosition, positions }: Props) => {
  const [formData, setFormData] = useState<PositionType>(initialState)

  const allPositionsNames = positions.map((pos) => pos.name)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      setFormData({...formData, [name]: !formData[name as keyof typeof formData]})
    } else {
      setFormData({...formData, [name]: value})
    }
  }

  const handleSubmit = (e: any) => {
    if (activePosition) {
      if (activePosition.name === formData.name) {
        setPosition((prev) => prev.map((pos) => pos.name === activePosition.name ? formData : pos))
        setFormData(initialState)
      } else alert("already exist")
    } else {
      if (!allPositionsNames.includes(formData.name)) {
        setPosition((prev) => [...prev, formData])
        setFormData(initialState)
      } else alert("already exist")
    }
    e.preventDefault();
  };
  
  useEffect(() => {
    if (activePosition !== null) {
      setFormData(activePosition)
    } else {
      setFormData(initialState)
    }
  }, [activePosition])
  

  return (
    <section className={`${styles} ${colors.bg_black_2} rounded-lg p-4`}>
      <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
        <label>Назва</label>
        <input name="name" required value={formData.name} onChange={(e) => handleChange(e)}/>

        <div>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h6>Обов'язки</h6>
          <div>
            <p>Торгівля</p>
            <input type="checkbox" name="product" id="product" checked={formData.product} onChange={(e) => handleChange(e)} />
            <label htmlFor="product">Продавати продукти</label>
            <input type="checkbox" name="price" id="price" checked={formData.price} onChange={(e) => handleChange(e)} />
            <label htmlFor="price">Виставляти ціни</label>
            <input type="checkbox" name="analytics" id="analytics" checked={formData.analytics} onChange={(e) => handleChange(e)} />
            <label htmlFor="analytics">Дивитись аналітику</label>
          </div>

          <div>
            <p>Виставляти ціни</p>
            
          </div>
        </div>

        <button
          type="submit"
          className={
            `${colors.bg_violet} ${colors.text_white_1} w-full py-[14px] rounded-lg border-2 ${colors.border_white_16}
            text-sm font-semibold drop-shadow-[0_4px_40px_rgba(104,102,234,0.24)]`
          }
        >
          <p className="drop-shadow-[0_4px_8px_rgba(245,245,245,0.24)]">
            Зберегти
          </p>
        </button>
      </form>
    </section>
  )
}

export default PositionInfo