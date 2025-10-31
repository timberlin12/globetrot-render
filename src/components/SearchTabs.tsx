import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { MapPin, Hotel, Car, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SearchTabs = () => {
  return (
    <section className="bg-white shadow-large -mt-20 relative z-50 mx-4 md:mx-8 lg:mx-auto lg:max-w-6xl rounded-2xl p-6 md:p-8">
      <Tabs defaultValue="tour" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6 bg-muted p-1 rounded-lg">
          <TabsTrigger value="tour" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white">
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">Tour</span>
          </TabsTrigger>
          <TabsTrigger value="hotel" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white">
            <Hotel className="w-4 h-4" />
            <span className="hidden sm:inline">Hotel</span>
          </TabsTrigger>
          <TabsTrigger value="transport" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white">
            <Car className="w-4 h-4" />
            <span className="hidden sm:inline">Transport</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tour">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kerala">Kerala</SelectItem>
                <SelectItem value="rajasthan">Rajasthan</SelectItem>
                <SelectItem value="manali">Manali</SelectItem>
                <SelectItem value="goa">Goa</SelectItem>
                <SelectItem value="kashmir">Kashmir</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Tour Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="cultural">Cultural</SelectItem>
                <SelectItem value="relaxation">Relaxation</SelectItem>
                <SelectItem value="wildlife">Wildlife</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jan">January</SelectItem>
                <SelectItem value="feb">February</SelectItem>
                <SelectItem value="mar">March</SelectItem>
                <SelectItem value="apr">April</SelectItem>
                <SelectItem value="may">May</SelectItem>
                <SelectItem value="jun">June</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3-5">3-5 Days</SelectItem>
                <SelectItem value="6-8">6-8 Days</SelectItem>
                <SelectItem value="9-12">9-12 Days</SelectItem>
                <SelectItem value="12+">12+ Days</SelectItem>
              </SelectContent>
            </Select>

            <Button asChild className="bg-primary hover:bg-primary-dark text-white font-semibold">
              <Link to="/tours">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="hotel">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="jaipur">Jaipur</SelectItem>
              </SelectContent>
            </Select>

            <Input type="date" placeholder="Check-in" className="w-full" />
            
            <Input type="date" placeholder="Check-out" className="w-full" />

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Room Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="deluxe">Deluxe</SelectItem>
                <SelectItem value="suite">Suite</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
              </SelectContent>
            </Select>

            <Input type="number" placeholder="Guests" defaultValue="2" min="1" />

            <Button asChild className="bg-primary hover:bg-primary-dark text-white font-semibold">
              <Link to="/hotel">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="transport">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input placeholder="From Location" className="w-full" />

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Transport Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car">Car</SelectItem>
                <SelectItem value="bus">Bus</SelectItem>
                <SelectItem value="train">Train</SelectItem>
                <SelectItem value="flight">Flight</SelectItem>
              </SelectContent>
            </Select>

            <Input type="date" placeholder="Reserve Date" className="w-full" />

            <Button asChild className="bg-primary hover:bg-primary-dark text-white font-semibold">
              <Link to="/transport">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};
