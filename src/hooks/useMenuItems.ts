import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export interface MenuItem {
    id: string;
    label: string;
    url: string;
    open_in_new?: boolean;
}

export function useMenuItems() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMenu() {
            try {
                const { data, error } = await supabase
                    .from('ui_menu_items')
                    .select('*')
                    .eq('is_active', true)
                    .is('parent_id', null)
                    .order('order', { ascending: true });

                if (error) throw error;
                if (data) {
                    setMenuItems(data as MenuItem[]);
                }
            } catch (err) {
                console.error("Error fetching menu items", err);
            } finally {
                setLoading(false);
            }
        }
        fetchMenu();
    }, []);

    return { menuItems, loading };
}
