import style from  '../../styles/productCard.module.css';
import Image from 'next/image'
const ProductCard= () => {
    return <div className={style.card}>
                <div className={style.imgBox}>
                    <Image src="/cardigan.png" alt="" width={258} height={328}/>
                </div>
                <div className={style.infoBox}>
                    <h3 className={style.productName}>Plus Cable Knit Lantern Sleeve Cardigan</h3>
                    <h2 className={style.price}>฿610</h2>
                </div>
            </div>
}

export default ProductCard