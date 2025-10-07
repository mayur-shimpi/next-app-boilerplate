'use client'

import { useState } from 'react'
import { PrimaryButton, PrimaryOutlineButton, SecondaryButton } from './Buttons'
import Checkbox from './Checkbox'
import CheckboxSelector from './CheckboxSelector'
import DateField from './DateField'
import FilterTabs from './FilterTabs'
import InputField from './InputField'
import PasswordField from './PasswordField'
import RadioGroup from './RadioGroup'
import SelectBox from './SelectBox'
import TextArea from './TextArea'
import VoiceTextArea from './VoiceTextArea'

export default function FullForm() {
    // Form state
    const [text, setText] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [singleCheck, setSingleCheck] = useState(false)
    const [multiCheck, setMultiCheck] = useState<string[]>([])
    const [selectedDate, setSelectedDate] = useState<string | undefined>()
    const [selectedTab, setSelectedTab] = useState('Tab 1')
    const [radioValue, setRadioValue] = useState('option1')
    const [selectValue, setSelectValue] = useState('option1')
    const [textAreaValue, setTextAreaValue] = useState('')
    const [voiceText, setVoiceText] = useState('')

    // Reset form
    const resetForm = () => {
        setText('')
        setPassword('')
        setEmail('')
        setSingleCheck(false)
        setMultiCheck([])
        setSelectedDate(undefined)
        setSelectedTab('Tab 1')
        setRadioValue('option1')
        setSelectValue('option1')
        setTextAreaValue('')
        setVoiceText('')
    }

    // Handle submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const formData = {
            text,
            password,
            email,
            singleCheck,
            multiCheck,
            selectedDate,
            selectedTab,
            radioValue,
            selectValue,
            textAreaValue,
            voiceText,
        }
        console.log('Form Data:', formData)
        alert('Form submitted! Check console.')
    }

    return (
        <div className='max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md '>
            <h3 className='text-xl font-semibold mb-6'>Custom Form Fields</h3>
            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                {/* Filter Tabs */}
                <FilterTabs
                    options={['Tab 1', 'Tab 2', 'Tab 3']}
                    value={selectedTab}
                    onChange={setSelectedTab}
                />

                {/* Text Input */}
                <InputField
                    label="Name"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter your name"
                    isRequired
                />

                {/* Email Input */}
                <InputField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    isRequired
                />

                {/* Password */}
                <PasswordField
                    label="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />

                {/* Single Checkbox */}
                <Checkbox
                    label="I agree to terms & conditions"
                    checked={singleCheck}
                    onChange={setSingleCheck}
                />

                {/* Multi Checkbox Selector */}
                <CheckboxSelector
                    label="Select Interests"
                    name="interests"
                    value={multiCheck}
                    options={[
                        { label: 'Sports', value: 'sports' },
                        { label: 'Music', value: 'music' },
                        { label: 'Travel', value: 'travel' },
                    ]}
                    onChange={setMultiCheck}
                />

                {/* Radio Buttons */}
                <RadioGroup
                    label="Gender"
                    value={radioValue}
                    options={[
                        { label: 'Male', value: 'option1' },
                        { label: 'Female', value: 'option2' },
                        { label: 'Other', value: 'option3' },
                    ]}
                    onChange={setRadioValue}
                />

                {/* Select Box */}
                <SelectBox
                    label="Select Country"
                    value={selectValue}
                    options={[
                        { label: 'USA', value: 'option1' },
                        { label: 'India', value: 'option2' },
                        { label: 'UK', value: 'option3' },
                    ]}
                    onChange={setSelectValue}
                />

                {/* Date Picker */}
                <DateField
                    label="Date of Birth"
                    value={selectedDate}
                    onChange={setSelectedDate}
                />

                {/* TextArea */}
                <TextArea
                    label="About Yourself"
                    name="about"
                    value={textAreaValue}
                    onChange={(e) => setTextAreaValue(e.target.value)}
                    placeholder="Write something about yourself"
                />

                {/* Voice Text Area */}
                <VoiceTextArea
                    label="Voice Notes"
                    name="voiceNotes"
                    value={voiceText}
                    onChange={(e) => setVoiceText(e.target.value)}
                    placeholder="Click microphone to speak..."
                />

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-4">
                    <PrimaryButton type="submit" label="Submit" />
                    <PrimaryOutlineButton type="button" label="Cancel" onClick={resetForm} />
                    <SecondaryButton type="button" label="Reset" onClick={resetForm} />
                </div>
            </form>
        </div>
    )
}
