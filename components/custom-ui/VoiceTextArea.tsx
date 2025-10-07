'use client';

import { useEffect, useRef, useState } from 'react';
import { MicrophoneIcon } from '@heroicons/react/24/outline';

type TextAreaProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
};

export default function VoiceTextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
}: TextAreaProps) {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null); // fallback-safe

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognitionConstructor =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognitionConstructor) {
        const recognition = new SpeechRecognitionConstructor();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          const syntheticEvent = {
            target: {
              name,
              value: transcript,
            },
          } as React.ChangeEvent<HTMLTextAreaElement>;
          onChange(syntheticEvent);
          setIsListening(false);
        };

        recognition.onerror = () => setIsListening(false);
        recognition.onend = () => setIsListening(false);

        recognitionRef.current = recognition;
      }
    }
  }, [name, onChange]);

  const handleMicClick = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      recognitionRef.current?.start();
    }
    setIsListening((prev) => !prev);
  };

  return (
    <div className="mb-4 relative">
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        rows={4}
        className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:border-soboBlue focus:ring-0 focus:ring-soboBlue focus:outline-none focus:border-soboBlue bg-transparent"
      />
      <button
        type="button"
        onClick={handleMicClick}
        className="absolute bottom-2 right-2 p-1 bg-white rounded-full shadow hover:bg-soboBlue/10"
      >
        <MicrophoneIcon
          className={`w-5 h-5 ${isListening ? 'text-red-500 animate-pulse' : 'text-gray-500'}`}
        />
      </button>
    </div>
  );
}
