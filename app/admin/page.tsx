'use client';
import React from 'react';
import { useAppSelector } from '@/lib/toolkit/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/toolkit/store';
import { increment } from '@/lib/toolkit/features/counter';
import { Button } from 'primereact/button';

const Page = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="card flex align-items-center justify-content-center ">
                <h5>Admin Page</h5>
                <p>Count: {count}</p>
                <Button label="Increment" onClick={() => dispatch(increment(1))} />
                <Button label="Decrement" onClick={() => dispatch(increment(-1))} />
            </div>
        </div>
    );
};

export default Page;
