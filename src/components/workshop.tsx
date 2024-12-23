'use client';
import { useVariableValue } from "@devcycle/nextjs-sdk";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { useEffect, useState } from "react";
import Snowfall from "./snowfall";

interface Activity {
    activity: string
    enabled: boolean
  }


export function Workshop() {
    const [activities, setActivities] = useState<Activity[]>([])
  const isChristmasEve = useVariableValue('christmas-eve', false)

  useEffect(() => {
    fetch('/api/workshop')
      .then(res => res.json())
      .then(data => setActivities(data))
  }, [])

  const toggleActivity = async (activity: string, enabled: boolean) => {
    const response = await fetch('/api/workshop', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ activity, enabled }),
    })

    if (response.ok) {
      setActivities(prev => 
        prev.map(a => a.activity === activity ? { ...a, enabled } : a)//toggle the activity that was clicked, if it was clicked
      )
    }
  }



  return (
    <div className="w-full max-w-4xl">
      <Snowfall />
      <Card className="bg-white/10 backdrop-blur-lg text-white">
        <CardHeader>
          <CardTitle>Elf Control Panel</CardTitle>
          <CardDescription className="text-gray-200">Toggle Christmas preparations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map(({ activity, enabled }) => (
              <div key={activity} className="flex items-center justify-between">
                <label htmlFor={activity} className="text-lg capitalize">{activity.replace('-', ' ')}</label>
                <Switch
                  id={activity}
                  checked={enabled}
                  onCheckedChange={(checked) => toggleActivity(activity, checked)}
                  disabled={isChristmasEve}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      {isChristmasEve && (
        <div className="mt-8 text-center text-white text-2xl animate-pulse">
          🎄 It&apos;s Christmas Eve! All preparations are locked. 🎅
        </div>
      )}
    </div>
    );
}