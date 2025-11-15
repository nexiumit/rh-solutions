import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaArrowRight } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  icon: IconType;
  image: string;
}

export default function ServiceCard({ title, description, benefits, icon: Icon, image }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm text-slate-700 mb-2">Bénéfices clés :</h4>
          <ul className="space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-sm text-slate-600 flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-2">
          <Link to="/contact" className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Demander un devis
            </Button>
          </Link>
          <Button variant="outline" className="flex items-center">
            En savoir plus
            <FaArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}