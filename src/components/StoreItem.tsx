import { Card, Button } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

const StoreItem = ({ id, name, imgUrl, price }: StoreItemProps) => {

    const quantity = 0;

    return (
        <Card>
            <Card.Img
                variant='top'
                src={imgUrl} height='400px'
                style={{ objectFit: 'cover' }}
            />

            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>
                        {formatCurrency(price)}
                    </span>
                </Card.Title>

                <div className="mt-auto">
                    {quantity === 0 ? (<Button>+ Add to Cart</Button>) : (
                        <div className="d-flex flex-column align-items-center" style={{ gap: '.5rem' }}>
                            <div className="d-flex justify-content-center align-items-center" style={{ gap: '.5rem' }}>
                                <Button>-</Button>
                                <div>
                                    <span className='fs-3'>{quantity}</span> in cart
                                </div>
                                <Button>+</Button>
                            </div>
                            <Button variant='danger'>Remove</Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

export default StoreItem;