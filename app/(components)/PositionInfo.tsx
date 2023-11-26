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
  purchase: false,
  hr: false,
  duel: false,
  claims: false,
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

  // this is my bad code, I'm sorry
  const handleSubmit = (e: any) => {
    if (activePosition) {
      if (activePosition.name === formData.name || !allPositionsNames.includes(formData.name)) {
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
        <div className={`${colors.bg_black_1} rounded-lg pt-4 px-4 pb-6 mb-[15px]`}>
          <label className={`${colors.text_gray_1} text-xs font-semibold block pb-1`}>
            Назва
          </label>
          <input
            className={
              `w-full bg-transparent rounded-lg border-2 text-sm font-semibold py-[14px] px-4
              focus-visible:outline-none ${colors.border_white} ${colors.text_white_1}`
            }
            name="name"
            required
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="flex-1">
          <div className={`shadow-[0_4px_16px_rgba(0,0,0,0.24)] pt-[11px] pb-[9px] pl-4 rounded-t-lg ${colors.bg_black_1}`}>
            <h6 className={`text-sm ${colors.text_gray_1}`}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Обов'язки
            </h6>
          </div>
          <div className={`w-[calc(100%-5px)] ml-[5px] p-3 flex flex-wrap gap-y-3 ${colors.bg_black_1}`}>
            <div className="w-1/2 flex flex-col gap-2">
              <p className={`${colors.text_gray_1} text-xs font-medium`}>
                Торгівля
              </p>
              <div className="flex items-center gap-[3px]">
                <input
                  className={
                    `relative peer shrink-0 appearance-none w-6 h-6 border-2 ${colors.border_white} rounded-[4px]
                     ${colors.bg_black_1} checked:border-indigo-500`
                  }
                  type="checkbox"
                  name="product"
                  id="product"
                  checked={formData.product}
                  onChange={(e) => handleChange(e)}
                />
                <label className={`${colors.text_white_1} text-xs font-medium`} htmlFor="product">
                  Продавати продукти
                </label>
                <svg
                  className="absolute w-6 h-6 hidden peer-checked:block pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6764F1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="flex items-center gap-[3px]">
                <input
                  className={
                    `relative peer shrink-0 appearance-none w-6 h-6 border-2 ${colors.border_white} rounded-[4px] 
                    ${colors.bg_black_1} checked:border-indigo-500`
                  }
                  type="checkbox"
                  name="price"
                  id="price"
                  checked={formData.price}
                  onChange={(e) => handleChange(e)}
                />
                <label className={`${colors.text_white_1} text-xs font-medium`} htmlFor="price">
                  Виставляти ціни
                </label>
                <svg
                  className="absolute w-6 h-6 hidden peer-checked:block pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6764F1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="flex items-center gap-[3px]">
                <input
                  className={
                    `relative peer shrink-0 appearance-none w-6 h-6 border-2 ${colors.border_white} rounded-[4px] 
                    ${colors.bg_black_1} checked:border-indigo-500`
                  }
                  type="checkbox"
                  name="analytics"
                  id="analytics"
                  checked={formData.analytics}
                  onChange={(e) => handleChange(e)}
                />
                <label className={`${colors.text_white_1} text-xs font-medium`} htmlFor="analytics">
                  Дивитись аналітику
                </label>
                <svg
                  className="absolute w-6 h-6 hidden peer-checked:block pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6764F1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>

            <div className="w-1/2 flex flex-col gap-2">
              <p className={`${colors.text_gray_1} text-xs font-medium`}>Виробництво</p>
              <div className="flex items-center gap-[3px]">
                <input
                  className={
                    `relative peer shrink-0 appearance-none w-6 h-6 border-2 ${colors.border_white} rounded-[4px] 
                    ${colors.bg_black_1} checked:border-indigo-500`
                  }
                  type="checkbox"
                  name="purchase"
                  id="purchase"
                  checked={formData.purchase}
                  onChange={(e) => handleChange(e)}
                />
                <label className={`${colors.text_white_1} text-xs font-medium`} htmlFor="purchase">
                  Закупати сировину
                </label>
                <svg
                  className="absolute w-6 h-6 hidden peer-checked:block pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6764F1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="flex items-center gap-[3px]">
                <input
                  className={
                    `relative peer shrink-0 appearance-none w-6 h-6 border-2 ${colors.border_white} rounded-[4px] 
                    ${colors.bg_black_1} checked:border-indigo-500`
                  }
                  type="checkbox"
                  name="hr"
                  id="hr"
                  checked={formData.hr}
                  onChange={(e) => handleChange(e)}
                />
                <label className={`${colors.text_white_1} text-xs font-medium`} htmlFor="hr">
                  Назначати робочих
                </label>
                <svg
                  className="absolute w-6 h-6 hidden peer-checked:block pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6764F1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>

            <div className="w-1/2 flex flex-col gap-2">
              <p className={`${colors.text_gray_1} text-xs font-medium`}>Розборки</p>
              <div className="flex items-center gap-[3px]">
                <input
                  className={
                    `relative peer shrink-0 appearance-none w-6 h-6 border-2 ${colors.border_white} rounded-[4px] 
                    ${colors.bg_black_1} checked:border-indigo-500`
                  }
                  type="checkbox"
                  name="duel"
                  id="duel"
                  checked={formData.duel}
                  onChange={(e) => handleChange(e)}
                />
                <label className={`${colors.text_white_1} text-xs font-medium`} htmlFor="duel">
                  Дуель
                </label>
                <svg
                  className="absolute w-6 h-6 hidden peer-checked:block pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6764F1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="flex items-center gap-[3px]">
                <input
                  className={
                    `relative peer shrink-0 appearance-none w-6 h-6 border-2 ${colors.border_white} rounded-[4px] ${colors.bg_black_1} checked:border-indigo-500`
                  }
                  type="checkbox"
                  name="claims"
                  id="claims"
                  checked={formData.claims}
                  onChange={(e) => handleChange(e)}
                />
                <label className={`${colors.text_white_1} text-xs font-medium`} htmlFor="claims">
                  Виставляти претензії
                </label>
                <svg
                  className="absolute w-6 h-6 hidden peer-checked:block pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6764F1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>

            <div className="w-1/2 flex flex-col gap-2">
              <p className={`${colors.text_gray_1} text-xs font-medium`}>Управління</p>
              <div className="flex items-center gap-[3px]">
                <input
                  className={
                    `relative peer shrink-0 appearance-none w-6 h-6 border-2 ${colors.border_white} rounded-[4px] ${colors.bg_black_1} checked:border-indigo-500`
                  }
                  type="checkbox"
                  name="assign_positions"
                  id="assign_positions"
                  checked={formData.assign_positions}
                  onChange={(e) => handleChange(e)}
                />
                <label className={`${colors.text_white_1} text-xs font-medium`} htmlFor="assign_positions">
                  Назначати звання
                </label>
                <svg
                  className="absolute w-6 h-6 hidden peer-checked:block pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6764F1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="flex items-center gap-[3px]">
                <input
                  className={
                    `relative peer shrink-0 appearance-none w-6 h-6 border-2 ${colors.border_white} rounded-[4px] ${colors.bg_black_1} checked:border-indigo-500`
                  }
                  type="checkbox"
                  name="dismiss"
                  id="dismiss"
                  checked={formData.dismiss}
                  onChange={(e) => handleChange(e)}
                />
                <label className={`${colors.text_white_1} text-xs font-medium`} htmlFor="dismiss">
                  Виганяти з банди
                </label>
                <svg
                  className="absolute w-6 h-6 hidden peer-checked:block pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6764F1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>
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