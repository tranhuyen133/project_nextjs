'use client';
import { useState } from 'react';

const PersonalInfo: React.FC = () => {
  const [firstName, setFirstName] = useState('Huyen');
  const [lastName, setLastName] = useState('Tran');
  const [gender, setGender] = useState('Female');
  const [birthday, setBirthday] = useState({ month: 'March', day: 13 });
  const [relationshipStatus, setRelationshipStatus] = useState('Single');

  const handleSave = () => {
    // Xử lý lưu thông tin vào database hoặc localStorage ở đây
    alert('Information saved!');
  };

  return (
    <div className="container mx-auto py-10 px-6 m" >
      <h1 className="text-3xl font-bold mb-6">Your Account</h1>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block font-bold">First Name</label>
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            className="border p-2 w-full mb-4" 
          />

          <label className="block font-bold">Last Name</label>
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            className="border p-2 w-full mb-4" 
          />

          <label className="block font-bold">Gender</label>
          <div className="mb-4">
            <label>
              <input 
                type="radio" 
                value="Female" 
                checked={gender === 'Female'} 
                onChange={() => setGender('Female')} 
              />
              Female
            </label>
            <label className="ml-4">
              <input 
                type="radio" 
                value="Male" 
                checked={gender === 'Male'} 
                onChange={() => setGender('Male')} 
              />
              Male
            </label>
          </div>

          <label className="block font-bold">Birthday</label>
          <div className="flex space-x-4 mb-4">
            <select 
              value={birthday.month} 
              onChange={(e) => setBirthday({ ...birthday, month: e.target.value })}
              className="border p-2"
            >
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              <option></option>
              {/* Thêm các tháng khác */}
            </select>
            <input 
              type="number" 
              value={birthday.day} 
              onChange={(e) => setBirthday({ ...birthday, day: Number(e.target.value) })}
              className="border p-2 w-1/4" 
            />
          </div>

          <label className="block font-bold">Relationship Status</label>
          <select 
            value={relationshipStatus} 
            onChange={(e) => setRelationshipStatus(e.target.value)} 
            className="border p-2 w-full mb-4"
          >
            <option>Single</option>
            <option>Married</option>
            <option>Engaged</option>
            {/* Thêm các tùy chọn khác */}
          </select>

          <button 
            onClick={handleSave} 
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
          >
            Save
          </button>
        </div>
        <div className="w-1/2">
          <img src="https://www.tiffany.com/shared/images/checkout/blue-box.jpg" alt="Gift Box" className="w-full px-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
