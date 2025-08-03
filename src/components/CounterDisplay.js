'use client';

import { useAtomValue } from 'jotai';
import { counterAtom } from '../store/atoms';

export default function CounterDisplay() {
  const counter = useAtomValue(counterAtom);

  return (
    <div className="p-4 bg-green-100 rounded-lg border">
      <h3 className="text-lg font-semibold mb-2">다른 컴포넌트에서 카운터 값 확인</h3>
      <p className="text-2xl font-bold text-green-700">현재 카운터: {counter}</p>
    </div>
  );
} 